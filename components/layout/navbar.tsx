"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { LangToggle } from "@/components/shared/lang-toggle";
import { useLang } from "@/components/shared/lang-provider";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLang();

  return (
    <header className="fixed inset-x-0 top-0 z-sticky h-18 border-b border-border bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-modal focus:rounded-md focus:bg-foreground focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-background"
      >
        {t.nav.skip}
      </a>
      <Container className="flex h-full items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="NxtAIGen">
          <Image
            src="/logo.svg"
            alt=""
            width={34}
            height={34}
            className="shrink-0 rounded-md"
          />
          <span className="truncate text-base font-extrabold tracking-[-0.025em]">
            NxtAIGen
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label={t.footer.navigation}>
          <a
            href="#projects"
            className="text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
          >
            {t.nav.projects}
          </a>
          <a
            href="https://theo.nxtaigen.com/"
            className="text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
          >
            {t.nav.portfolio}
          </a>
        </nav>

        <div className="flex items-center gap-1.5">
          <LangToggle />
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a
              href="https://github.com/scorpion7slayer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} data-icon="inline-start" />
              {t.nav.github}
            </a>
          </Button>
          <Button
            type="button"
            size="icon"
            variant="ghost"
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden"
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
          </Button>
        </div>
      </Container>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="animate-nav-menu absolute inset-x-0 top-full border-b border-border bg-background md:hidden"
          aria-label={t.footer.navigation}
        >
          <Container className="flex flex-col gap-2 py-4">
            <Button asChild variant="ghost" className="w-full justify-start">
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                {t.nav.projects}
              </a>
            </Button>
            <Button asChild variant="ghost" className="w-full justify-start">
              <a
                href="https://theo.nxtaigen.com/"
                onClick={() => setMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faUser} data-icon="inline-start" />
                {t.nav.portfolio}
              </a>
            </Button>
            <Button asChild className="w-full justify-start">
              <a
                href="https://github.com/scorpion7slayer"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faGithub} data-icon="inline-start" />
                {t.nav.github}
              </a>
            </Button>
          </Container>
        </nav>
      )}
    </header>
  );
}
