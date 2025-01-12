"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";

import { cn } from "@/lib/utils";

type SpotlightProps = {
    children: React.ReactNode;
    href: string;
    className?: string;
};

const Spotlight = (props: SpotlightProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        const rect = ref.current?.getBoundingClientRect();

        if (rect) {
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            setMousePosition({ x, y });
        }
    }

    return (
        <Link href={props.href} target="_blank" rel="noopener noreferrer">
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative overflow-hidden rounded-md border"
            >
                <div
                    className={cn("absolute inset-0 z-0 transition-opacity duration-300 ease-in-out", props.className)}
                    style={{
                        background: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2), transparent 80%)`,
                        opacity: isHovered ? 1 : 0,
                        pointerEvents: "none",
                    }}
                />
                <div className="relative space-y-1 p-3">{props.children}</div>
            </motion.div>
        </Link>
    );
};

export { Spotlight };
