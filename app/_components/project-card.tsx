"use client";

/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

type ProjectCardProps = {
    project: {
        title: string;
        description: string;
        image: string;
        href: string;
    };
};

const ProjectCard = (props: ProjectCardProps) => {
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
        <Link href={props.project.href} target="_blank">
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
                <div className="relative p-3 space-y-1">
                    <img src={props.project.image} alt={`Projet : ${props.project.title}`} className="rounded-lg" />
                    <div>
                        <p className="text-sm">{props.project.title}</p>
                        <p className="text-xs text-muted-foreground line-clamp-2">{props.project.description}</p>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export { ProjectCard };
