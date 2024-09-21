"use client";

import Image from "next/image";

import { Config } from "@/config";
import { BriefcaseBusiness } from "lucide-react";

const Experience = () => {
    return (
        <div className="w-[350px] space-y-6 rounded-2xl border border-neutral p-4">
            <div className="flex items-center gap-x-3.5 ml-1.5">
                <BriefcaseBusiness strokeWidth={1.5} />
                <h2 className="font-semibold text-lg">Expérience</h2>
            </div>
            <div className="space-y-4">
                {Config.Experience.map((item, index) => (
                    <div className="flex items-center gap-x-2" key={index}>
                        <div className="avatar rounded-full bg-neutral p-1">
                            <Image
                                src={item.image}
                                alt={`Experience : ${item.name}`}
                                width={30}
                                height={30}
                                className="aspect-square rounded-full pointer-events-none"
                            />
                        </div>
                        <div className="w-full">
                            <h3 className="truncate font-semibold">{item.name}</h3>
                            <div className="flex justify-between">
                                <p className="text-xs">{item.details}</p>
                                <p className="text-xs">
                                    {item.startDate} - {item.endDate}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={() => alert("En cours de fabrication")} className="btn w-full btn-sm">
                Download CV
            </button>
        </div>
    );
};

export { Experience };
