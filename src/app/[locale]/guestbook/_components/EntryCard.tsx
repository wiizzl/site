"use client";

import { Guestbook, User } from "@prisma/client";

type EntryCardProps = {
    user: User;
    entry: Guestbook;
};

const EntryCard = (props: EntryCardProps) => {
    return (
        <div className="flex gap-x-1 text-sm">
            <h4 className="whitespace-nowrap">{props.user.name} :</h4>
            <p className="truncate">{props.entry.message}</p>
        </div>
    );
};

export { EntryCard };
