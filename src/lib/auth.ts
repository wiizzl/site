import { cache } from "react";

import { auth } from "@/auth";

const currentSession = cache(auth);

const currentUser = async () => {
    const session = await currentSession();

    return session?.user;
};

export { currentSession, currentUser };
