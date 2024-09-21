"use client";

import { I18nProviderClient } from "@/locales/client";

type ProvidersProps = {
    children: React.ReactNode;
    locale: string;
};

const Providers = (props: ProvidersProps) => {
    return (
        <I18nProviderClient locale={props.locale} fallback={<span className="loading loading-infinity loading-lg" />}>
            {props.children}
        </I18nProviderClient>
    );
};

export { Providers };
