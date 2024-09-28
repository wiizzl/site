import { MaxWidthWrapper } from "@/components/layout/MaxWidthWrapper";

import { getScopedI18n } from "@/locales/server";

export default async function PrivacyPage() {
    const t = await getScopedI18n("pages.legal.privacy");

    return (
        <section className="my-12 min-h-screen">
            <MaxWidthWrapper>
                <article className="prose max-w-full">
                    <h1>{t("title")}</h1>
                    <p>
                        <strong>{t("lastUpdated")} :</strong> 25/09/2024
                    </p>
                    <p>{t("description")}</p>

                    <h2>{t("collectionOfPersonalInformation")}</h2>
                    <p>{t("collectionDescription")}</p>
                    <ul>
                        <li>{t("automaticallyCollectedInformation")}</li>
                        <li>{t("voluntarilyProvidedInformation")}</li>
                    </ul>

                    <h2>{t("useOfInformation")}</h2>
                    <p>{t("useDescription")}</p>
                    <ul>
                        <li>{t("useList.0")}</li>
                        <li>{t("useList.1")}</li>
                        <li>{t("useList.2")}</li>
                    </ul>

                    <h2>{t("sharingOfInformation")}</h2>
                    <p>{t("sharingDescription")}</p>
                    <ul>
                        <li>{t("sharingList.0")}</li>
                        <li>{t("sharingList.1")}</li>
                        <li>{t("sharingList.2")}</li>
                    </ul>

                    <h2>{t("cookies")}</h2>
                    <p>{t("cookiesDescription")}</p>

                    <h2>{t("dataSecurity")}</h2>
                    <p>{t("dataSecurityDescription")}</p>

                    <h2>{t("thirdPartyLinks")}</h2>
                    <p>{t("thirdPartyLinksDescription")}</p>

                    <h2>{t("yourRights")}</h2>
                    <p>{t("yourRightsDescription")}</p>
                    <ul>
                        <li>{t("yourRightsList.0")}</li>
                        <li>{t("yourRightsList.1")}</li>
                        <li>{t("yourRightsList.2")}</li>
                    </ul>
                    <p>{t("contactForRights")}</p>

                    <h2>{t("policyModifications")}</h2>
                    <p>{t("policyModificationsDescription")}</p>
                </article>
            </MaxWidthWrapper>
        </section>
    );
}
