const role = "Apprentice software engineer";
const location = { city: "Rouen", country: "France", countryCode: "FR" };
const mail = "hi@houlliere.com";

export const CONSTS = {
  title: "Pierre Houllière",
  role,
  description: `${role} and a freelancer based in ${location.city}, ${location.country}.`,
  company: {
    name: "Docaposte Agility",
    url: "https://docaposte-agility.fr",
  },
  school: { name: "CESI", url: "https://cesi.fr" },
  location,
  mail,
  links: [
    { name: "GitHub", url: "https://github.com/wiizzl" },
    { name: "LinkedIn", url: "https://linkedin.com/in/pierrehoulliere" },
    { name: "Email", url: `mailto:${mail}` },
    { name: "CV", url: "/cv" },
  ],
};
