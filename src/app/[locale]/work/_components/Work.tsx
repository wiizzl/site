"use client";

import { WorkCard } from "./WorkCard";

const Work = () => {
    const works = [
        { title: "hey", description: "", preview: "", stack: [""] },
        { title: "", description: "", preview: "", stack: [""] },
    ];

    return (
        <div>
            {works.map((item, index) => {
                return <WorkCard work={item} key={index} />;
            })}
        </div>
    );
};

export { Work };
