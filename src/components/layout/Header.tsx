"use client";

import { Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";
import { LangSelect } from "@/components/select/LangSelect";
import { ThemeSelect } from "@/components/select/ThemeSelect";

import { cn } from "@/lib/utils";

import { useScopedI18n } from "@/locales/client";

const Header = () => {
    const t = useScopedI18n("layout.header");
    const pathname = usePathname();

    const nav = [
        { name: t("about"), href: "/about" },
        { name: t("projects"), href: "/projects" },
        { name: t("monitoring"), href: "/monitoring" },
        { name: t("guestbook"), href: "/guestbook" },
    ];

    return (
        <MaxWidthWrapper>
            <header className="flex items-center justify-between py-4">
                <Link href="/" className="btn btn-circle">
                    <div className="avatar">
                        <Image
                            src="/images/me.jpg"
                            alt="Photo de profil"
                            width={40}
                            height={40}
                            className="rounded-full object-cover"
                        />
                    </div>
                </Link>
                <nav className="ml-10 flex gap-x-6">
                    {nav.map((item, index) => (
                        <Link
                            href={item.href}
                            className={cn("transition-colors duration-300 hover:text-primary", {
                                "text-primary": pathname.endsWith(item.href),
                            })}
                            key={index}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <div className="flex space-x-2">
                    <Link
                        title={t("getSource")}
                        href="https://github.com/wiizzl/portfolio"
                        target="_blank"
                        className="btn btn-square btn-ghost"
                    >
                        <Code />
                    </Link>
                    <ThemeSelect />
                    <LangSelect />
                </div>
            </header>
        </MaxWidthWrapper>
    );
};

export { Header };
