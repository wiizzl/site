"use client";

import Link from "next/link";

import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";

import { useScopedI18n } from "@/locales/client";

import { Config } from "@/config";

const Footer = () => {
    const t = useScopedI18n("layout.footer");

    return (
        <MaxWidthWrapper>
            <footer className="footer items-center justify-between border-t border-neutral-content/50 py-10">
                <nav className="flex gap-x-6">
                    {Config.Socials.map((item, index) => (
                        <Link href={item.href} target="_blank" className="hover:underline" key={index}>
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <p>
                    Copyright &copy; wiizz {new Date().getFullYear()} - {t("allRightReserved")}
                </p>
            </footer>
        </MaxWidthWrapper>
    );
};

export { Footer };
