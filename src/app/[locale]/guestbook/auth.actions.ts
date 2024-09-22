"use server";

import { signIn } from "@/auth";

const logIn = async () => {
    await signIn("github");
};

export { logIn };
