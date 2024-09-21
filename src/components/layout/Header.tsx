"use client";

import { Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";
import { LangSelect } from "@/components/select/LangSelect";
import { ThemeSelect } from "@/components/select/ThemeSelect";

import { Config } from "@/config";

const Header = () => {
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
                <nav className="flex gap-x-6 ml-10">
                    {Config.Navigation.map((item, index) => (
                        <Link
                            href={item.href}
                            className="hover:text-primary transition-colors duration-300"
                            key={index}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <div className="flex space-x-2">
                    <ThemeSelect />
                    <LangSelect />
                    <button title="Accèder au code source" className="btn btn-ghost">
                        <Link href="https://github.com/wiizzl/portfolio" target="_blank">
                            <Code />
                        </Link>
                    </button>
                </div>
            </header>
        </MaxWidthWrapper>
    );
};

export { Header };
