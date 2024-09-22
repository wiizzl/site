"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { Loader } from "@/components/Loader";

import { I18nProviderClient } from "@/locales/client";

type ProvidersProps = {
    children: React.ReactNode;
    locale: string;
    session: Session | null;
};

const Providers = (props: ProvidersProps) => {
    return (
        <SessionProvider session={props.session}>
            <I18nProviderClient locale={props.locale} fallback={<Loader />}>
                {props.children}
            </I18nProviderClient>
        </SessionProvider>
    );
};

export { Providers };
