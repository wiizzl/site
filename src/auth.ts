import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

import { env } from "@/lib/env";
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
    pages: {
        error: "/error",
        signIn: "/guestbook",
        signOut: "/guestbook",
    },
    adapter: PrismaAdapter(prisma),
    events: {
        createUser: async (event) => {
            const userId = event.user.id;
            if (!userId) return;

            await prisma.user.update({
                where: { id: userId },
                data: { emailVerified: new Date() },
            });
        },
    },
    providers: [
        GitHub({
            clientId: env.AUTH_GITHUB_ID,
            clientSecret: env.AUTH_GITHUB_SECRET,
        }),
    ],
    secret: env.AUTH_SECRET,
});
