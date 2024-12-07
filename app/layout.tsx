import "@/globals.css";

import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import { Header } from "@/components/layout/header";
import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";

import { config } from "@/config";

export const metadata: Metadata = {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
        title: config.title,
        description: config.description,
        images: [{ url: "/images/thumbnail.png" }],
    },
    twitter: {
        card: "summary_large_image",
        title: config.title,
        description: config.description,
        images: ["/images/thumbnail.png"],
    },
    authors: [{ name: "Pierre", url: "https://github.com/wiizzl" }],
    creator: "Pierre HOULLIERE",
    icons: { icon: "/favicon.ico" },
    metadataBase: new URL("https://pierreh.vercel.app"),
};

type RootLayoutProps = Readonly<{
    children: React.ReactNode;
}>;

export default function RootLayout(props: RootLayoutProps) {
    return (
        <html lang="fr">
            <body className="antialiased">
                <Analytics />
                <MaxWidthWrapper>
                    <Header />
                    {props.children}
                </MaxWidthWrapper>
            </body>
        </html>
    );
}
