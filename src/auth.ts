import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

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
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
        }),
    ],
    secret: process.env.AUTH_SECRET,
});
