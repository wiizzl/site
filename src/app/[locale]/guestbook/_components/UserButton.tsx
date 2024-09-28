"use client";

import { Github } from "lucide-react";
import { signOut } from "next-auth/react";
import { useTransition } from "react";

import { logIn } from "../auth.actions";
import { EntryForm } from "./EntryForm";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useScopedI18n } from "@/locales/client";

const UserButton = () => {
    const t = useScopedI18n("pages.guestbook");
    const user = useCurrentUser();
    const [isPending, startTransition] = useTransition();

    return (
        <>
            {user ? (
                <div className="flex gap-x-2">
                    <EntryForm />
                    <button disabled={isPending} onClick={() => signOut()} className="btn">
                        {t("signOut")}
                    </button>
                </div>
            ) : (
                <button disabled={isPending} onClick={() => startTransition(logIn)} className="btn btn-outline">
                    {isPending ? <span className="loading loading-infinity" /> : <Github strokeWidth={1.5} />}
                    {t("signIn")}
                </button>
            )}
        </>
    );
};

export { UserButton };
