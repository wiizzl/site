import "@/styles.css";

import type { Metadata } from "next";

import { Providers } from "@/app/[locale]/providers";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
    title: "Pierre H. - wiizz",
    description: "Portfolio",
    icons: {
        icon: "/favicon.ico",
    },
};

type RootLayoutProps = Readonly<{
    children: React.ReactNode;
    params: {
        locale: string;
    };
}>;

export default function RootLayout(props: RootLayoutProps) {
    return (
        <html className="transition-colors duration-300">
            <body className="antialiased">
                <Providers locale={props.params.locale}>
                    <Header />
                    <main>{props.children}</main>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
