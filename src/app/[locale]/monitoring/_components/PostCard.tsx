"use client";

import Link from "next/link";

type PostCardProps = {
    date: string;
    title: string;
};

const PostCard = (props: PostCardProps) => {
    return (
        <Link href="/">
            <div className="flex gap-x-4">
                <h4>{props.date}</h4>
                <h4 className="font-semibold">{props.title}</h4>
            </div>
        </Link>
    );
};

export { PostCard };
