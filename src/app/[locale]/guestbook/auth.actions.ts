"use server";

import { signIn, signOut } from "@/auth";

const logIn = async () => {
    await signIn("github");
};

const logOut = async () => {
    await signOut();
};

export { logIn, logOut };
