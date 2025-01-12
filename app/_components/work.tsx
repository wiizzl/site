import Link from "next/link";

import { config } from "@/config";

const Work = () => {
    return (
        <div className="flex flex-col space-y-4">
            {config.work.map((item, index) => (
                <Link href={item.href} target="_blank" className="group" key={index}>
                    <h3 className="line-clamp-1 text-sm group-hover:underline">{item.name}</h3>
                    <p className="line-clamp-2 text-sm text-muted-foreground">{item.description}</p>
                </Link>
            ))}
        </div>
    );
};

export { Work };
