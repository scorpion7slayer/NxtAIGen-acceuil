export type Lang = "fr" | "en";

export const translations = {
  fr: {
    meta: {
      title: "NxtAIGen — Outils open source pour développeurs",
      description:
        "Découvrez les outils open source NxtAIGen pour GitHub, l'IA, le terminal et vos workflows de développement.",
    },
    nav: {
      projects: "Projets",
      portfolio: "Portfolio",
      github: "GitHub",
      skip: "Aller au contenu",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
    },
    hero: {
      badge: "Open source · outils développeur",
      title: "Des outils pour",
      titleAccent: "celles et ceux qui créent.",
      description:
        "NxtAIGen réunit des projets concrets pour simplifier GitHub, comparer les modèles d'IA et garder votre environnement à jour.",
      explore: "Explorer les projets",
      viewGithub: "Voir sur GitHub",
      stageLabel: "nxtaigen://projets",
      stageCount: "4 projets",
      stageCaption: "GitHub, IA et terminal — sans détour.",
    },
    projects: {
      title: "Quatre projets, quatre manières d'enlever la friction.",
      description:
        "Chaque outil répond à un blocage précis. Les visuels donnent le contexte ; les liens mènent directement à ce qui fonctionne aujourd'hui.",
      openSourceTitle: "Le code fait partie du produit.",
      openSourceDescription:
        "Consultez les dépôts, suivez les versions et voyez comment chaque outil est construit.",
      openSourceAction: "Voir les dépôts",
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
      close: "Fermer",
      copy: "Copier la commande",
      copied: "Commande copiée",
    },
    footer: {
      rights: "Tous droits réservés.",
      description:
        "Des outils open source conçus par un développeur indépendant pour les workflows qui comptent.",
      navigation: "Navigation",
      poweredBy: "Propulsé par",
    },
  },
  en: {
    meta: {
      title: "NxtAIGen — Open-source tools for developers",
      description:
        "Discover NxtAIGen's open-source tools for GitHub, AI, the terminal, and modern development workflows.",
    },
    nav: {
      projects: "Projects",
      portfolio: "Portfolio",
      github: "GitHub",
      skip: "Skip to content",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      badge: "Open source · developer tools",
      title: "Tools for",
      titleAccent: "people who build.",
      description:
        "NxtAIGen brings together practical projects that simplify GitHub, compare AI models, and keep your environment up to date.",
      explore: "Explore the projects",
      viewGithub: "View on GitHub",
      stageLabel: "nxtaigen://projects",
      stageCount: "4 projects",
      stageCaption: "GitHub, AI, and the terminal — no detours.",
    },
    projects: {
      title: "Four projects, four ways to remove friction.",
      description:
        "Each tool solves a specific bottleneck. The visuals provide context; the links lead straight to what works today.",
      openSourceTitle: "The code is part of the product.",
      openSourceDescription:
        "Browse the repositories, follow releases, and see how each tool is built.",
      openSourceAction: "View repositories",
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
      close: "Close",
      copy: "Copy command",
      copied: "Command copied",
    },
    footer: {
      rights: "All rights reserved.",
      description:
        "Open-source tools built by an independent developer for workflows that matter.",
      navigation: "Navigation",
      poweredBy: "Powered by",
    },
  },
} as const;
