"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { currentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

import { getScopedI18n } from "@/locales/server";
import { entrySchema } from "./entry.schema";

const entry = async (values: z.infer<typeof entrySchema>) => {
    const t = await getScopedI18n("pages.guestbook.notif");

    const user = await currentUser();
    if (!user || !user.id) throw new Error(t("error"));

    const existingEntry = await prisma.guestbook.findFirst({
        where: { userId: user.id },
    });
    if (existingEntry) throw new Error(t("alreadyFound"));

    await prisma.guestbook.create({
        data: {
            userId: user.id,
            message: values.message,
        },
    });

    revalidatePath("/");
};

export { entry };
