"use client";

import { BriefcaseBusiness } from "lucide-react";
import Image from "next/image";

const Experience = () => {
    const experience = [
        {
            name: "Développeur Web",
            details: "Freelance",
            startDate: "04/2023",
            endDate: "Présent",
            image: "https://i.imgur.com/Lr0FsHR.jpeg",
        },
        {
            name: "Campus La Chataîgneraie",
            details: "BTS SIO (Option SLAM)",
            startDate: "09/2024",
            endDate: "Présent",
            image: "https://i.imgur.com/8AAoBGY.png",
        },
        {
            name: "Lycée Galilée, Franqueville-St-Pierre",
            details: "BAC Général (Maths - SI)",
            startDate: "09/2021",
            endDate: "07/2024",
            image: "https://i.imgur.com/287GhRx.png",
        },
    ];

    return (
        <div className="w-[350px] space-y-6 rounded-2xl border border-neutral p-4">
            <div className="ml-1.5 flex items-center gap-x-3.5">
                <BriefcaseBusiness strokeWidth={1.5} />
                <h2 className="text-lg font-semibold">Expérience</h2>
            </div>
            <div className="space-y-4">
                {experience.map((item, index) => (
                    <div className="flex items-center gap-x-2" key={index}>
                        <div className="avatar rounded-full bg-neutral p-1">
                            <Image
                                src={item.image}
                                alt={`Experience : ${item.name}`}
                                width={30}
                                height={30}
                                className="pointer-events-none aspect-square rounded-full"
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
            <button onClick={() => alert("En cours de fabrication")} className="btn btn-sm w-full">
                Download CV
            </button>
        </div>
    );
};

export { Experience };
