"use client";

import { Code, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";
import { LangSelect } from "@/components/select/LangSelect";
import { ThemeSelect } from "@/components/select/ThemeSelect";

import { cn } from "@/lib/utils";

import { useScopedI18n } from "@/locales/client";

import { Config } from "@/config";

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
                <div className="flex gap-x-2">
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
                    <div className="drawer z-50 block md:hidden">
                        <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            <label htmlFor="nav-drawer" className="btn btn-square btn-ghost drawer-button">
                                <Menu />
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="nav-drawer" aria-label="close sidebar" className="drawer-overlay" />
                            <div className="min-h-full w-48 bg-base-200">
                                <h2 className="bg-base-200 py-8 text-center text-xl font-semibold">{Config.Title}</h2>
                                <ul className="menu p-4">
                                    {nav.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className={cn("text-lg", {
                                                    "text-primary": pathname.includes(item.href),
                                                })}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="ml-10 hidden gap-x-6 md:flex">
                    {nav.map((item, index) => (
                        <Link
                            href={item.href}
                            className={cn("transition-colors duration-300 hover:text-primary", {
                                "text-primary": pathname.includes(item.href),
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
