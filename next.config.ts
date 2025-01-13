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
        ];
    },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
