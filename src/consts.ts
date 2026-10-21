const name = "Pierre Houllière";
const role = "Apprentice software engineer";
const company = {
  name: "Docaposte Agility",
  url: "https://docaposte-agility.fr",
};
const location = { city: "Rouen", country: "France", countryCode: "FR" };
const mail = "hi@houlliere.com";

export const CONSTS = {
  title: name,
  role,
  description: `${role} at ${company.name} and a freelancer based in ${location.city}, ${location.country}.`,
  company,
  school: { name: "CESI", url: "https://cesi.fr" },
  location,
  mail,
  links: [
    { name: "GitHub", url: "https://github.com/wiizzl" },
    { name: "LinkedIn", url: "https://linkedin.com/in/pierrehoulliere" },
    { name: "Email", url: `mailto:${mail}` },
    { name: "CV", url: "/cv" },
  ],
  award: {
    name: "French Vice-Champion in Web Technologies at WorldSkills France 2025",
    url: "https://worldskills-france.org/editions/competition-nationale-des-metiers-2025-48e-edition",
  },
};
