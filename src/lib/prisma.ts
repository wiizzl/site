import { PrismaClient } from "@prisma/client";

import { env } from "@/lib/env";

const prismaClientSingleton = () => {
    return new PrismaClient();
};

declare const globalThis: {
    prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (env.ENV !== "production") globalThis.prismaGlobal = prisma;
