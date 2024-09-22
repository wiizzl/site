import { prisma } from "@/lib/prisma";

const getGuestbookEntries = async () => {
    const entries = await prisma.guestbook.findMany();

    return entries;
};

export { getGuestbookEntries };
