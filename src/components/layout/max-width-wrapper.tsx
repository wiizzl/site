import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps {
    className?: string;
    children: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => (
    <div className={cn("h-full mx-auto w-full max-w-[630px] px-2.5 sm:px-0", className)}>{children}</div>
);

export { MaxWidthWrapper };
