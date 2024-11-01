"use client";

import { Loader2 } from "lucide-react";

const Loader = () => {
    return (
        <div className="flex justify-center items-center">
            <Loader2 className="animate-spin size-12" />
        </div>
    );
};

export { Loader };
