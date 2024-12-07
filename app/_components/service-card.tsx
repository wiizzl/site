"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";

type ServiceCardProps = {
    service: {
        title: string;
        emoji: string;
        description: string;
        href: string;
    };
};

const ServiceCard = (props: ServiceCardProps) => {
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
        <Link href={props.service.href} target="_blank">
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.03 }}
                className="relative rounded-lg border overflow-hidden"
            >
                <div
                    className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out"
                    style={{
                        background: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2), transparent 80%)`,
                        opacity: isHovered ? 1 : 0,
                        pointerEvents: "none",
                    }}
                />
                <div className="relative p-3">
                    <p className="text-sm">
                        {props.service.emoji} {props.service.title}
                    </p>
                    <p className="text-xs text-muted-foreground line-clamp-2">{props.service.description}</p>
                </div>
            </motion.div>
        </Link>
    );
};

export { ServiceCard };
