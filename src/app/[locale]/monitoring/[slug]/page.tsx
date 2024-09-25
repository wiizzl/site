import { Suspense } from "react";

import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";
import { Loader } from "@/components/Loader";

// import { ErrorComponent, LoadingComponent } from "../components";
// import { Test } from "../mdxComponents";
// import { calculateSomeHow, getSourceSomeHow } from "../utils";

export default function PostPage() {
    return (
        <section className="my-12 min-h-screen">
            <MaxWidthWrapper>
                <Suspense fallback={<Loader />}>
                    {/* <MDXRemote source={source} options={options} components={components} /> */}
                </Suspense>
            </MaxWidthWrapper>
        </section>
    );
}
