"use client";

import { ArrowDown } from "lucide-react";

type ScrollDownProps = {
    id: string;
};

const ScrollDown = (props: ScrollDownProps) => {
    return (
        <button
            onClick={() => {
                const element = document.getElementById(props.id);

                element?.scrollIntoView({ behavior: "smooth" });
            }}
        >
            <ArrowDown className="size-8 animate-bounce" />
        </button>
    );
};

export { ScrollDown };
