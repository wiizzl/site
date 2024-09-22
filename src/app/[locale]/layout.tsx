import "@/styles.css";

import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

import { currentSession } from "@/lib/auth";

import { Config } from "@/config";

import { Providers } from "./providers";

export const metadata: Metadata = {
    title: Config.Title,
    description: Config.Description,
    keywords: Config.Keywords,
    openGraph: {
        title: Config.Title,
        description: Config.Description,
        images: [{ url: "/images/thumbnail.png" }],
    },
    twitter: {
        card: "summary_large_image",
        title: Config.Title,
        description: Config.Description,
        images: ["/images/thumbnail.png"],
    },
    authors: [{ name: "Pierre", url: "https://github.com/wiizzl" }],
    creator: "Pierre HOULLIERE",
    icons: { icon: "/favicon.ico" },
    metadataBase: new URL("http://localhost:3000"),
};

type RootLayoutProps = Readonly<{
    children: React.ReactNode;
    params: {
        locale: string;
    };
}>;

export default async function RootLayout(props: RootLayoutProps) {
    const session = await currentSession();

    return (
        <html className="transition-colors duration-300">
            <body className="antialiased">
                <Providers locale={props.params.locale} session={session}>
                    <Header />
                    <main>{props.children}</main>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
