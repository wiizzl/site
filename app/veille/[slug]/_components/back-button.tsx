"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

const BackButton = () => {
    const router = useRouter();

    return (
        <Button variant="ghost" size="sm" onClick={() => router.back()}>
            <ChevronLeft /> Retour à l'accueil
        </Button>
    );
};

export { BackButton };
