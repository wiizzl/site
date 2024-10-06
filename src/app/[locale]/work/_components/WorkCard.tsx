"use client";

type WorkCardProps = {
    work: {
        title: string;
        description: string;
        preview: string;
        stack: string[];
    };
};

const WorkCard = (props: WorkCardProps) => {
    return <div>{props.work.title}</div>;
};

export { WorkCard };
