"use client";

import Link from "next/link";

import { Config } from "@/config";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

const Footer = () => {
    return (
        <MaxWidthWrapper>
            <footer className="footer items-center justify-between border-t border-neutral-content/50 py-10">
                <nav className="flex gap-x-6">
                    {Config.Navigation.map((item, index) => (
                        <Link href={item.href} className="hover:underline" key={index}>
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <p>Copyright &copy; {new Date().getFullYear()} - All right reserved</p>
            </footer>
        </MaxWidthWrapper>
    );
};

export { Footer };
