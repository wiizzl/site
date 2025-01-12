import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [{ hostname: "i.imgur.com", protocol: "https" }],
    },
    pageExtensions: ["ts", "tsx", "mdx"],
    experimental: {
        mdxRs: true,
    },
    async redirects() {
        return [
            {
                source: "/resume",
                destination: "/cv.pdf",
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
        ];
    },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
