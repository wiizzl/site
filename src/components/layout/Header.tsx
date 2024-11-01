"use client";

import Link from "next/link";
import { cloneElement } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { ThemeToggle } from "@/features/theme/theme-toggle";

import { config } from "@/config";

const Header = () => {
    return (
        <header className="z-50 items-center justify-between flex p-4 border rounded-lg mt-14 mb-6">
            <div className="flex items-center gap-x-3">
                <Link href="/">
                    <Avatar className="size-11">
                        <AvatarImage src="/images/me.jpg" />
                        <AvatarFallback>PH</AvatarFallback>
                    </Avatar>
                </Link>
                <div>
                    <div className="flex gap-x-1 items-baseline">
                        <h1 className="font-semibold leading-7">Pierre Houllière</h1>
                        <ThemeToggle />
                    </div>
                    <p className="text-xs font-light">Étudiant, développeur freelance</p>
                </div>
            </div>
            <div className="flex gap-x-2">
                {config.socials.map((item, index) => {
                    const ariaLabel = `Social : ${item.name}`;

                    return (
                        <Link
                            href={item.href}
                            target="_blank"
                            className="hover:scale-105 transition-transform duration-300"
                            aria-label={ariaLabel}
                            key={index}
                        >
                            {cloneElement(item.icon, { className: "size-5" })}
                            <span className="sr-only">{ariaLabel}</span>
                        </Link>
                    );
                })}
            </div>
        </header>
    );
};

export { Header };
