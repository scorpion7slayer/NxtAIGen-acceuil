export type Lang = "fr" | "en";

export const translations = {
  fr: {
    nav: {
      projects: "Projets",
      portfolio: "Portfolio",
      github: "GitHub",
    },
    hero: {
      badge: "Outils open source · NxtAIGen",
      title: "Projets",
      titleAccent: "NxtAIGen",
      description:
        "Un ensemble d'outils open source construits par NxtAIGen — chacun accessible directement depuis cette page.",
    },
    card: {
      visit: "Visiter",
      download: "Télécharger",
      demo: "Démo",
      comingSoon: "Bientôt disponible",
      github: "GitHub",
      install: "Installer",
      installTitle: "Installer NxtUpdate",
      step1: "1. Installer Bun",
      step2: "2. Installer NxtUpdate",
      or: "ou",
    },
    footer: {
      rights: "Tous droits réservés.",
    },
  },
  en: {
    nav: {
      projects: "Projects",
      portfolio: "Portfolio",
      github: "GitHub",
    },
    hero: {
      badge: "Open source tools · NxtAIGen",
      title: "Projects",
      titleAccent: "NxtAIGen",
      description:
        "A collection of open source tools built by NxtAIGen — each one accessible directly from this page.",
    },
    card: {
      visit: "Visit",
      download: "Download",
      demo: "Demo",
      comingSoon: "Coming soon",
      github: "GitHub",
      install: "Install",
      installTitle: "Install NxtUpdate",
      step1: "1. Install Bun",
      step2: "2. Install NxtUpdate",
      or: "or",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
} as const;
