import Link from "next/link";

import { Button } from "@/components/ui/button";

/**
 * This component is inspired by franky47's NotFound component.
 * @see https://github.com/franky47/francoisbest.com
 */
export default function NotFoundPage() {
    return (
        <section className="mt-32 space-y-4 text-center">
            <h2 className="text-8xl font-bold text-secondary">404</h2>
            <div>
                <h3 className="my-4 text-2xl font-semibold text-primary">Page not found</h3>
                <p className="text-sm text-muted-foreground">Sorry, there's nothing here.</p>
            </div>
            <Button variant="link" asChild>
                <Link href="/">Back to home</Link>
            </Button>
        </section>
    );
}
