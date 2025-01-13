import { useState } from "react";

type CopyState = "READY" | "SUCCESS" | Error;

/**
 * @see https://dev.to/iamhectorsosa/building-react-hooks-copy-to-clipboard-2m9h
 */
const useClipboard = ({ delay = 1000 } = {}) => {
    const [state, setState] = useState<CopyState>("READY");
    const [copyTimeout, setCopyTimeout] = useState<ReturnType<typeof setTimeout>>();

    function handleCopyResult(result: CopyState) {
        setState(result);
        clearTimeout(copyTimeout);
        setCopyTimeout(setTimeout(() => setState("READY"), delay));
    }

    function copy(valueToCopy: string) {
        if ("clipboard" in navigator) {
            navigator.clipboard
                .writeText(valueToCopy)
                .then(() => handleCopyResult("SUCCESS"))
                .catch((error) => error instanceof Error && handleCopyResult(error));
        } else {
            handleCopyResult(new Error("`useClipboard`: Navigation Clipboard is not supported"));
        }
    }

    return { copy, state };
};

export { useClipboard };
