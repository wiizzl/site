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
        <div className="flex gap-x-24">
            <h4 className="mt-[34px] whitespace-nowrap pl-8">{props.date.toLocaleDateString()}</h4>
            <Link
                href={`/monitoring/${props.slug}`}
                className="w-full space-y-3 rounded-xl bg-base-200/0 p-8 transition-colors duration-300 hover:bg-base-200"
            >
                <h3 className="truncate text-lg font-semibold">{props.title}</h3>
                <p className="text-sm">{props.description}</p>
                <p className="flex items-center gap-x-1 text-sm text-primary">
                    Lire l'article <ChevronRight className="mt-1 size-3" />
                </p>
            </Link>
        </div>
    );
};

export { PostCard };
