import { ThemeProvider } from "@/features/theme/theme-provider";

type ProvidersProps = {
    children: React.ReactNode;
};

const Providers = (props: ProvidersProps) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
            {props.children}
        </ThemeProvider>
    );
};

export { Providers };
