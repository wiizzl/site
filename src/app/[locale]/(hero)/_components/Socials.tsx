"use client";

import Link from "next/link";

import { Config } from "@/config";

const Socials = () => {
    return (
        <div className="flex gap-x-6">
            {Config.Socials.map((item, index) => (
                <Link
                    href={item.href}
                    target="_blank"
                    className="transition-all duration-300 hover:rotate-3 hover:text-primary"
                    key={index}
                >
                    {item.icon}
                    <span className="sr-only">{item.name}</span>
                </Link>
            ))}
        </div>
    );
};

export { Socials };
