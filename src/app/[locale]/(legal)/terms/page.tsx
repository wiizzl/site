import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";

import { getScopedI18n } from "@/locales/server";

export default async function TermsPage() {
    const t = await getScopedI18n("pages.legal.terms");

    return (
        <section className="my-12 min-h-screen">
            <MaxWidthWrapper>
                <article className="prose max-w-full">
                    <h1>{t("title")}</h1>
                    <p>
                        <strong>{t("lastUpdated")} :</strong> 27/09/2024
                    </p>
                    <p>{t("description")}</p>

                    <h2>{t("accessToSite")}</h2>
                    <p>{t("accessDescription")}</p>

                    <h2>{t("intellectualProperty")}</h2>
                    <p>{t("intellectualPropertyDescription")}</p>

                    <h2>{t("acceptableUse")}</h2>
                    <p>{t("acceptableUseDescription")}</p>
                    <ul>
                        <li>{t("acceptableUseList.0")}</li>
                        <li>{t("acceptableUseList.1")}</li>
                        <li>{t("acceptableUseList.2")}</li>
                    </ul>
                    <p>{t("acceptableUseConsequence")}</p>

                    <h2>{t("userResponsibility")}</h2>
                    <p>{t("userResponsibilityDescription")}</p>

                    <h2>{t("limitationOfLiability")}</h2>
                    <p>{t("limitationOfLiabilityDescription")}</p>
                    <p>{t("limitationOfLiabilityConsequence")}</p>

                    <h2>{t("thirdPartyLinks")}</h2>
                    <p>{t("thirdPartyLinksDescription")}</p>

                    <h2>{t("termsModification")}</h2>
                    <p>{t("termsModificationDescription")}</p>

                    <h2>{t("termination")}</h2>
                    <p>{t("terminationDescription")}</p>

                    <h2>{t("applicableLaw")}</h2>
                    <p>{t("applicableLawDescription")}</p>
                </article>
            </MaxWidthWrapper>
        </section>
    );
}
