const role = "Apprentice software engineer";
const mail = "hi@houlliere.com";

export const CONSTS = {
  title: "Pierre Houllière",
  role,
  description: `${role} and a freelancer based in Rouen, France.`,
  company: {
    name: "Docaposte Agility",
    url: "https://docaposte-agility.fr",
  },
  mail,
  giscus: {
    repo: "wiizzl/site",
    repoId: "R_kgDOM0DJ2g",
    category: "Comments",
    categoryId: "DIC_kwDOM0DJ2s4DK5pl",
  },
  links: [
    { name: "GitHub", url: "https://github.com/wiizzl" },
    { name: "LinkedIn", url: "https://linkedin.com/in/pierrehoulliere" },
    { name: "Email", url: `mailto:${mail}` },
    { name: "CV", url: "/cv/" },
  ],
};
