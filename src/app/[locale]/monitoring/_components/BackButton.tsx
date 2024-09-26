"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
    const router = useRouter();

    return (
        <button onClick={() => router.back()}>
            <ArrowLeft />
        </button>
    );
};

export { BackButton };
