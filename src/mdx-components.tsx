import Image from "next/image";
import Link from "next/link";
import React, { ComponentPropsWithoutRef } from "react";
import { highlight } from "sugar-high";

import { CopyButton } from "@/components/mdx/copy-button";
import { Button } from "@/components/ui/button";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;
type ImageProps = ComponentPropsWithoutRef<"img">;

const components = {
    Title: (props: { children: React.ReactNode }) => (
        <div className="mb-3 [&:not(:first-child)]:mt-8">
            <h2 className="mb-2">{props.children}</h2>
            <hr />
        </div>
    ),
    h1: (props: HeadingProps) => (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" {...props} />
    ),
    h2: (props: HeadingProps) => (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0" {...props} />
    ),
    h3: (props: HeadingProps) => <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight" {...props} />,
    h4: (props: HeadingProps) => <h4 className="scroll-m-20 text-xl font-semibold tracking-tight" {...props} />,
    p: (props: ParagraphProps) => <p className="text-sm [&:not(:first-child)]:mt-2" {...props} />,
    ol: (props: ListProps) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />,
    ul: (props: ListProps) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
    strong: (props: ComponentPropsWithoutRef<"strong">) => <strong className="font-semibold" {...props} />,
    img: (props: ImageProps) => (
        <Image
            src={props.src!}
            alt={props.src!}
            width={800}
            height={800}
            className="pointer-events-none select-none rounded-lg"
        />
    ),
    a: (props: AnchorProps) => {
        if (props.href?.startsWith("/") || props.href?.startsWith("#")) {
            return (
                <Button variant="link" asChild>
                    <Link href={props.href} {...props}>
                        {props.children}
                    </Link>
                </Button>
            );
        }

        return (
            <Button variant="link" asChild>
                <a href={props.href} target="_blank" rel="noopener noreferrer" {...props}>
                    {props.children}
                </a>
            </Button>
        );
    },
    code: (props: ComponentPropsWithoutRef<"code">) => {
        const code = props.children as string;

        return (
            <div className="relative rounded-lg bg-secondary px-2 py-4">
                <code dangerouslySetInnerHTML={{ __html: highlight(code) }} {...props} />
                <CopyButton content={code} className="absolute right-2 top-2" />
            </div>
        );
    },
    Table: (props: { data: { headers: string[]; rows: string[][] } }) => (
        <div className="my-6 w-full overflow-y-auto">
            <table className="w-full">
                <thead>
                    <tr className="m-0 border-t p-0">
                        {props.data.headers.map((header, index) => (
                            <th
                                className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
                                key={index}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.data.rows.map((row, index) => (
                        <tr className="m-0 border-t p-0" key={index}>
                            {row.map((cell, cellIndex) => (
                                <td
                                    className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
                                    key={cellIndex}
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    ),
    blockquote: (props: BlockquoteProps) => <blockquote className="mt-6 border-l-2 pl-6 italic" {...props} />,
};

declare global {
    type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
    return components;
}
