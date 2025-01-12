import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    pageExtensions: ["ts", "tsx", "mdx"],
    experimental: {
        mdxRs: true,
    },
    async redirects() {
        return [
            {
                source: "/resume",
                destination: "/",
                permanent: false,
            },
            {
                source: "/instagram",
                destination: "https://instagram.com/pierre.hlr_",
                permanent: true,
            },
            {
                source: "/linkedin",
                destination: "https://linkedin.com/in/pierrehoulliere",
                permanent: true,
            },
            {
                source: "/github",
                destination: "https://github.com/wiizzl",
                permanent: true,
            },
            {
                source: "/email",
                destination: "mailto:houllierep@gmail.com",
                permanent: true,
            },
        ];
    },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
