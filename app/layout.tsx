import "../src/globals.css";

import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

import { env } from "@/lib/env";

import { config } from "@/config";

export const metadata: Metadata = {
    title: {
        default: config.title,
        template: `%s - ${config.title}`,
    },
    alternates: { canonical: "/" },
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: config.title, url: env.NEXT_PUBLIC_APP_URL }],
    creator: config.title,
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
};

type RootLayoutProps = Readonly<{
    children: React.ReactNode;
}>;

export default function RootLayout(props: RootLayoutProps) {
    return (
        <html lang="en">
            <body className="mx-auto size-full max-w-[630px] px-2.5 antialiased selection:bg-primary/25 sm:px-0">
                <main className="my-8">
                    <Header />
                    {props.children}
                    <Footer />
                </main>
                <Analytics />
            </body>
        </html>
    );
}
