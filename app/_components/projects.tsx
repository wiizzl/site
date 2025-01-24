import { Code, Globe } from "lucide-react";
import Link from "next/link";

import {
    MorphingDialog,
    MorphingDialogContainer,
    MorphingDialogContent,
    MorphingDialogDescription,
    MorphingDialogImage,
    MorphingDialogSubtitle,
    MorphingDialogTitle,
    MorphingDialogTrigger,
} from "@/components/motion/morphing-dialog";
import { Spotlight } from "@/components/motion/spotlight";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { config } from "@/config";

const Projects = () => {
    return (
        <div className="grid gap-3 sm:grid-cols-2">
            {config.projects.map((item, index) => (
                <MorphingDialog
                    transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.3,
                    }}
                    key={index}
                >
                    <MorphingDialogTrigger>
                        <Spotlight hoverEffect>
                            <MorphingDialogImage
                                src={item.image}
                                alt={`Project : ${item.name}`}
                                className="pointer-events-none aspect-video w-full select-none rounded-md object-cover"
                            />
                            <div>
                                <MorphingDialogTitle>{item.name}</MorphingDialogTitle>
                                <p className="line-clamp-2 text-xs text-muted-foreground">{item.description}</p>
                            </div>
                        </Spotlight>
                    </MorphingDialogTrigger>
                    <MorphingDialogContainer>
                        <MorphingDialogContent
                            style={{ borderRadius: "var(--radius)" }}
                            className="bg-background sm:w-[500px]"
                        >
                            <Spotlight>
                                <MorphingDialogImage
                                    src={item.image}
                                    alt={`Project : ${item.name}`}
                                    className="pointer-events-none mb-3 w-full select-none rounded-md"
                                />
                                <div>
                                    <MorphingDialogTitle className="text-xl">{item.name}</MorphingDialogTitle>
                                    <MorphingDialogSubtitle className="mb-3 text-muted-foreground">
                                        {item.description}
                                    </MorphingDialogSubtitle>
                                    <MorphingDialogDescription className="space-y-3" disableLayoutAnimation>
                                        <div className="flex flex-wrap gap-1.5">
                                            {item.stack.map((stack, index2) => (
                                                <Badge variant="outline" key={index2}>
                                                    {stack}
                                                </Badge>
                                            ))}
                                        </div>
                                        <div className="flex gap-x-3">
                                            {item.source && (
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="focus-visible:ring-0 focus-visible:ring-offset-0"
                                                    asChild
                                                >
                                                    <Link href={item.source} target="_blank">
                                                        <Code />
                                                    </Link>
                                                </Button>
                                            )}
                                            {item.href && (
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="focus-visible:ring-0 focus-visible:ring-offset-0"
                                                    asChild
                                                >
                                                    <Link href={item.href} target="_blank">
                                                        <Globe />
                                                    </Link>
                                                </Button>
                                            )}
                                        </div>
                                    </MorphingDialogDescription>
                                </div>
                            </Spotlight>
                        </MorphingDialogContent>
                    </MorphingDialogContainer>
                </MorphingDialog>
            ))}
        </div>
    );
};

export { Projects };
