import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};

const getInitials = (fullName: string) => {
    const nameParts = fullName.trim().split(" ");

    if (nameParts.length >= 2) {
        const firstInitial = nameParts[0][0];
        const lastInitial = nameParts[nameParts.length - 1][0];

        return `${firstInitial}${lastInitial}`.toUpperCase();
    }

    return fullName[0]?.toUpperCase() || "";
};

export { cn, getInitials };
