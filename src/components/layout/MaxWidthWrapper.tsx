import { cn } from "@/lib/utils";

type MaxWidthWrapperProps = {
    children: React.ReactNode;
    className?: string;
};

const MaxWidthWrapper = (props: MaxWidthWrapperProps) => (
    <div className={cn("h-full mx-auto w-full max-w-6xl px-2.5 md:px-20", props.className)}>{props.children}</div>
);

export { MaxWidthWrapper };
