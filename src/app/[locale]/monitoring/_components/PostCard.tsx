"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

type PostCardProps = {
    date: Date;
    title: string;
    slug: string;
    description: string;
};

const PostCard = (props: PostCardProps) => {
    return (
        <div className="flex flex-col items-baseline gap-x-16 -space-y-4 md:flex-row">
            <h4 className="whitespace-nowrap border-l-4 border-base-300 pl-3 text-sm md:border-none md:pl-8 md:text-base">
                {props.date.toLocaleDateString()}
            </h4>
            <Link
                href={`/monitoring/${props.slug}`}
                className="w-full space-y-3 rounded-xl bg-base-200/0 py-8 transition-colors duration-300 md:px-8 md:hover:bg-base-200"
            >
                <h3 className="truncate font-semibold md:text-lg">{props.title}</h3>
                <p className="line-clamp-2 text-sm">{props.description}</p>
                <p className="flex items-center gap-x-1 text-sm text-primary">
                    Lire l'article <ChevronRight className="mt-0.5 size-3" />
                </p>
            </Link>
        </div>
    );
};

export { PostCard };
