---
title: CESI Schedule
description: My school timetable as a calendar feed, with encrypted stateless tokens.
url: https://cesi-schedule.vercel.app
repo: https://github.com/wiizzl/cesi-schedule
stack: [Go, Redis, Vercel]
order: 1
---

## The problem

At [CESI](https://cesi.fr), the timetable lives on the student portal (the ENT), behind the school's single sign-on. Checking my next class means opening a browser, logging in, and navigating to the right page. As an apprentice switching between school and work every month, I wanted my classes in my calendar app, next to everything else.

CESI Schedule turns the timetable into a standard iCalendar (`.ics`) feed. You enter your CESI email and password once, get a private link, and subscribe to it from Google Calendar, Apple Calendar, Thunderbird or anything else.

## Logging in like a browser

There is no public API, so the server logs in exactly like a browser would. The CESI login is a SAML flow that goes through several services:
1. The **WAYF** page ("Where Are You From") receives the email and answers with a form containing a `SAMLRequest`.
2. That form is posted to CESI's **ADFS** server, which returns the actual login form.
3. The server fills `UserName` and `Password` and submits it. If the credentials are good, ADFS answers with a `SAMLResponse`.
4. That response is posted back to the ENT, which opens a session.

Each step is an HTML page with an auto-submitting form, so the server parses the forms, keeps their hidden fields, and replays them with a cookie jar. Then it reads the student's internal ID from the timetable page, and calls the JSON endpoint the page itself uses.

Since the password goes through this flow, every form target is checked before submitting: the login form must be on the same host as the ADFS page, and the SAML response must go to `ent.cesi.fr`, over HTTPS. If CESI's pages ever changed in an unexpected way, the server fails instead of sending credentials somewhere else.

## Storing nothing

The hard question was: where do the credentials live? A calendar app polling a feed can only send a URL. So the credentials have to be in the URL, but they can't be readable.

The answer is a **stateless token**: the credentials are encrypted with **AES-256-GCM** and the result is the token in the link. There's no user database, nothing to leak.

- Two keys are derived from the server secret with HMAC: one to encrypt, one to compute identifiers. Using the same key for both would be a bad idea.
- The token starts with a version byte, so the format can change later without breaking existing links.
- Every encrypted value is bound to its purpose with GCM's associated data: a token can't be used as a cache entry, and a cache entry for one user can't be swapped with another's.
- The password never appears in logs: the server only logs errors, never URLs.

## Protecting students and CESI

A calendar feed is polled automatically, sometimes every few minutes, by apps that never give up. That could hurt both the students and CESI:

- **Account lockout.** If a student changes their CESI password, their calendar app keeps polling with the old one. Repeated failed logins could lock their account. So when CESI rejects credentials, that's remembered for 6 hours and the server doesn't even try again.
- **Load on CESI.** Calendars are cached for 15 minutes, logged-in sessions are reused, and a user can't trigger more than 30 refreshes per hour. Each instance runs at most 8 logins at the same time.
- **Abuse.** Generating a link is limited to 5 attempts per IP every 15 minutes, so the form can't be used to test passwords.

The cache and the counters live in [Upstash Redis](https://upstash.com). Users are identified by an HMAC of their email and password, so changing the password naturally gives a fresh cache. Cache entries are encrypted too: the Redis database never sees a timetable in clear. Rate limits use an `INCR` and a `PEXPIRE ... NX` in a single pipeline, so the counter's expiry is only set once, when the window starts.

## Writing iCalendar by hand

The `.ics` format looks trivial, but it has its quirks, and I wrote the generator myself rather than pulling a library:

- Lines longer than 75 bytes must be folded. Folding naively can cut a UTF-8 character in half (accents are everywhere in French course names), so the fold moves back to the start of the character.
- CESI returns dates with offsets like `+02` instead of `+02:00`, which Go's RFC 3339 parser refuses. They're fixed before parsing.
- All-day events need dates without times, and an end date strictly after the start.
- Commas, semicolons and line breaks must be escaped in text fields.

The feed covers the previous week and the next 7 weeks, fetched in 28-day chunks. If the ENT session expires midway, the server logs in again and retries once.

## Zero dependencies

The whole project uses only Go's standard library: no Redis client (Upstash has a REST API, so a few `net/http` calls are enough), no HTML parser, no iCalendar library. The timezone database is embedded in the binary with `time/tzdata`, because a serverless environment doesn't always ship one, and the week boundaries have to be computed in Paris time.

It runs on Vercel, with a small `cmd/server` entry point to run it anywhere else.

## Limits

It depends on CESI's HTML. If the login pages or the timetable endpoint change, it breaks until I update it. That's the price of working without an official API.
