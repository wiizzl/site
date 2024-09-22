"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheck, TriangleAlert } from "lucide-react";
import { startTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";

import { entry } from "../entry.actions";
import { entrySchema } from "../entry.schema";

import { useScopedI18n } from "@/locales/client";

type NotifProps = {
    content: string | undefined;
    type: "success" | "error" | null;
    icon: React.ReactNode | null;
};

const EntryForm = () => {
    const [notif, setNotif] = useState<NotifProps>({
        content: "",
        type: null,
        icon: null,
    });

    const t = useScopedI18n("pages.guestbook");

    const form = useForm<z.infer<typeof entrySchema>>({
        resolver: zodResolver(entrySchema),
        defaultValues: { message: "" },
    });

    function onSubmit(values: z.infer<typeof entrySchema>) {
        setNotif({ content: "", type: null, icon: null });

        startTransition(() => {
            entry(values)
                .then(() => {
                    setNotif({
                        content: t("notif.success"),
                        type: "success",
                        icon: <CircleCheck />,
                    });
                    form.reset();
                })
                .catch((error) => {
                    setNotif({
                        content: error.message,
                        type: "error",
                        icon: <TriangleAlert />,
                    });
                });
        });
    }

    const errors = form.formState.errors;

    return (
        <div>
            <button
                className="btn btn-outline"
                onClick={() => {
                    (document.getElementById("message_modal") as HTMLFormElement).showModal();
                }}
            >
                {t("writeMessage")}
            </button>
            <dialog id="message_modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-circle btn-ghost btn-sm absolute right-3.5 top-2">&#10005;</button>
                    </form>
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">{t("writeMessage")}</h3>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                            <div>
                                <textarea
                                    {...form.register("message")}
                                    className="textarea textarea-bordered w-full"
                                    placeholder={t("messageContent")}
                                />
                                {errors && <p className="text-sm text-error">{errors.message?.message}</p>}
                            </div>
                            {notif.content && (
                                <div
                                    role="alert"
                                    className={cn("alert py-2", {
                                        "alert-success": notif.type === "success",
                                        "alert-error": notif.type === "error",
                                    })}
                                >
                                    {notif.icon}
                                    <span>{notif.content}</span>
                                </div>
                            )}
                            <div className="modal-action flex justify-end">
                                <button type="submit" className="btn btn-outline flex">
                                    Confirmer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export { EntryForm };
