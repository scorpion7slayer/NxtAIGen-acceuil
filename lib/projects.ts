export interface InstallSteps {
  step1: string;
  step2a: string;
  step2b: string;
}

export interface Project {
  id: string;
  name: string;
  description: { fr: string; en: string };
  screenshot: string;
  tags: string[];
  href: string | null;
  github: string;
  releases?: string;
  demo?: string;
  install?: InstallSteps;
}

export const projects: Project[] = [
  {
    id: "nxtgit",
    name: "NxtGit",
    description: {
      fr: "Client GitHub léger pour macOS et Windows : browse tes repos, review du code, chat avec l'IA, édite des fichiers et push — sans navigateur.",
      en: "Lightweight GitHub client for macOS and Windows: browse repos, review code, chat with AI, edit files and push — no browser needed.",
    },
    screenshot: "/screenshots/NxtGit.webp",
    tags: ["TypeScript", "Tauri", "React", "AI"],
    href: "https://nxtgit.nxtaigen.com/",
    github: "https://github.com/scorpion7slayer/NxtGit",
    releases: "https://github.com/scorpion7slayer/NxtGit/releases",
    demo: "https://youtu.be/W2mVp_yVHcA",
  },
  {
    id: "nxtaicard",
    name: "BenchSift",
    description: {
      fr: "Catalogue comparant des centaines de modèles IA côte à côte : benchmarks, prix et vitesse actualisés en temps réel.",
      en: "Catalog comparing hundreds of AI models side by side: benchmarks, pricing and speed updated in real time.",
    },
    screenshot: "/screenshots/NxtAICard.webp",
    tags: ["TanStack Start", "TypeScript", "shadcn/ui"],
    href: "https://benchsift.nxtaigen.com/",
    github: "https://github.com/scorpion7slayer/benchsift",
  },
  {
    id: "nxtupdate",
    name: "NxtUpdate",
    description: {
      fr: "Outil en ligne de commande pour mettre à jour tous tes packages en une seule fois — Homebrew, npm, pip, Cargo et les mises à jour système macOS.",
      en: "Command-line tool to update all your packages at once — Homebrew, npm, pip, Cargo and macOS system updates.",
    },
    screenshot: "/screenshots/NxtUpdate.webp",
    tags: ["TypeScript", "CLI", "macOS", "Bun"],
    href: null,
    github: "https://github.com/scorpion7slayer/NxtUpdate",
    install: {
      step1: "curl -fsSL https://bun.sh/install | bash",
      step2a: "npm install -g nxtupdate",
      step2b: "bun add -g nxtupdate",
    },
  },
  {
    id: "nxtaigen",
    name: "NxtAIGen",
    description: {
      fr: "Chatbot web multi-modèles avec streaming temps réel. Accède à GPT, Claude, Mistral, Gemini, DeepSeek et plus depuis une interface unifiée.",
      en: "Multi-model web chatbot with real-time streaming. Access GPT, Claude, Mistral, Gemini, DeepSeek and more from a unified interface.",
    },
    screenshot: "/screenshots/NxtAIGen.webp",
    tags: ["PHP", "MySQL", "Tailwind", "12 providers"],
    href: null,
    github: "https://github.com/scorpion7slayer/NxtAIGen",
  },
];
