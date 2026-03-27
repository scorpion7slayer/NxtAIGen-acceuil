"use client";

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { LangToggle } from "@/components/shared/lang-toggle";
import { useLang } from "@/components/shared/lang-provider";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLang();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 backdrop-blur-xl bg-background/70 border-b border-border animate-fade-in-down">
      <Container className="h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
          <Image src="/logo.svg" alt="NxtAIGen" width={32} height={32} className="rounded-[6px]" />
          <span className="text-[17px] font-bold tracking-tight text-foreground">NxtAIGen</span>
        </a>

        <div />

        {/* Right side */}
        <div className="flex items-center gap-1">
          <LangToggle />
          <ThemeToggle />
          <a
            href="https://github.com/scorpion7slayer"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold ml-1 px-4 py-2 rounded-[10px] bg-accent text-accent-foreground hover:bg-accent-hover transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
            {t.nav.github}
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-[10px] text-foreground-muted hover:text-foreground hover:bg-background-secondary transition-all duration-200"
            aria-label="Menu"
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} className="w-5 h-5" />
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-xl border-b border-border",
          menuOpen ? "max-h-32" : "max-h-0"
        )}
      >
        <Container className="py-4 flex flex-col gap-1">
          <a
            href="https://github.com/scorpion7slayer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-[10px] bg-accent text-accent-foreground hover:bg-accent-hover text-center transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
            {t.nav.github}
          </a>
        </Container>
      </div>
    </header>
  );
}
