"use client";

import Link from "next/link";

import { getLocaleDate } from "@/hooks/date";

type PostCardProps = {
    slug: string;
    title: string;
    description: string;
    date: Date;
};

const PostCard = (props: PostCardProps) => {
    return (
        <Link href={`/veille/${props.slug}`}>
            <div className="flex justify-between items-center">
                <h3 className="text-sm hover:underline truncate">{props.title}</h3>
                <h3 className="text-xs">{getLocaleDate(props.date, "fr-FR")}</h3>
            </div>
            <p className="text-sm text-muted-foreground truncate">{props.description}</p>
        </Link>
    );
};

export { PostCard };
