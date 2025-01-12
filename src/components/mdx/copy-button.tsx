"use client";

import { Check, Clipboard } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useClipboard } from "@/hooks/clipboard";

type CodeProps = {
    content: string;
    className?: string;
};

const CopyButton = (props: CodeProps) => {
    const clipboard = useClipboard();

    return (
        <Button onClick={() => clipboard.copy(props.content)} variant="ghost" size="icon" className={props.className}>
            {clipboard.state === "READY" && <Clipboard />}
            {clipboard.state === "SUCCESS" && <Check />}
        </Button>
    );
};

export { CopyButton };
