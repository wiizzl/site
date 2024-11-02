import { Title } from "@/components/layout/title";
import { PostCard } from "./_components/post-card";
import { ProjectCard } from "./_components/project-card";
import { ServiceCard } from "./_components/service-card";

import { getPosts } from "@/hooks/posts";

export default async function HomePage() {
    const posts = await getPosts();

    const services = [
        {
            title: "Me recruter en tant que développeur",
            emoji: "🔍",
            description:
                "Avec de l'expérience dans la création d'application web et mobile, je peux créer votre prochain projet.",
            href: "https://cal.com/wiizzl/your-project",
        },
        {
            title: "Réserver une consultation",
            emoji: "📅",
            description:
                "Besoin de conseils sur votre projet ? Une consultation peut éclaircir les besoins techniques de votre projet.",
            href: "https://cal.com/wiizzl/consultation",
        },
    ];

    const projects = [
        {
            title: "FOLDING-ART",
            description: "Site e-commerce pour la vente de kirigamis (art chinois).",
            image: "https://i.imgur.com/Sc9Rrd7.png",
            href: "https://folding-art.vercel.app",
        },
        {
            title: "B-Pump",
            description:
                "Robot coach sportif utilisant l'intelligence artificielle pour guider les mouvements de l'utilisateur.",
            image: "https://i.imgur.com/k8bFJJK.png",
            href: "https://bpump-web.vercel.app",
        },
    ];

    return (
        <main className="space-y-4 pb-5">
            <section>
                <Title>Services 🛠️</Title>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {services.map((item, index) => (
                        <ServiceCard service={item} key={index} />
                    ))}
                </div>
            </section>
            <section>
                <Title>Projets & Travail (freelance) 🚧</Title>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {projects.map((item, index) => (
                        <ProjectCard project={item} key={index} />
                    ))}
                </div>
            </section>
            <section>
                <Title>Articles de veille 📝</Title>
                <div className="flex flex-col space-y-4">
                    {posts.map((item, index) => (
                        <PostCard
                            slug={item.slug}
                            title={item.title}
                            description={item.description}
                            date={item.date}
                            key={index}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
