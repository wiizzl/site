import Image from "next/image";

import { Spotlight } from "@/components/motion/spotlight";

import { config } from "@/config";
import Link from "next/link";

/**
 * @todo Add morphing dialog to show project details.
 * @see https://motion-primitives.com/docs/morphing-dialog
 */
const Projects = () => {
    return (
        <div className="grid gap-3 sm:grid-cols-2">
            {config.projects.map((item, index) => (
                <Link href={item.href} target="_blank" key={index}>
                    <Spotlight>
                        <Image
                            src={item.image}
                            alt={`Work : ${item.name}`}
                            width={400}
                            height={180}
                            className="aspect-video w-full rounded-sm brightness-90"
                        />
                        <div>
                            <h3>{item.name}</h3>
                            <p className="line-clamp-2 text-xs text-muted-foreground">{item.description}</p>
                        </div>
                    </Spotlight>
                </Link>
            ))}
        </div>
    );
};

export { Projects };
