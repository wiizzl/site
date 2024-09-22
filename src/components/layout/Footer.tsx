"use client";

import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";

import { useScopedI18n } from "@/locales/client";
import Link from "next/link";

const Footer = () => {
    const t = useScopedI18n("layout.footer");

    const nav = [
        { name: t("terms"), href: "/terms" },
        { name: t("privacy"), href: "/privacy" },
    ];

    return (
        <MaxWidthWrapper>
            <footer className="flex flex-col items-center justify-between space-y-5 border-t border-neutral-content/50 py-10 md:flex-row md:space-y-0">
                <nav className="flex gap-x-6">
                    {nav.map((item, index) => (
                        <Link href={item.href} className="text-sm hover:underline" key={index}>
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <p className="text-sm">
                    Copyright &copy; {new Date().getFullYear()} wiizz - {t("allRightReserved")}
                </p>
            </footer>
        </MaxWidthWrapper>
    );
};

export { Footer };
