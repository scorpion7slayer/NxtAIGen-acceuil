"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudflare, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Container } from "@/components/layout/container";
import { useLang } from "@/components/shared/lang-provider";

interface FooterProps {
  year: number;
}

export function Footer({ year }: FooterProps) {
  const { t } = useLang();

  return (
    <footer className="border-t border-border py-10 sm:py-12">
      <Container className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_0.8fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3" aria-label="NxtAIGen">
            <Image src="/logo.svg" alt="" width={32} height={32} className="rounded-md" />
            <span className="text-base font-extrabold tracking-[-0.025em]">NxtAIGen</span>
          </Link>
          <p className="mt-4 max-w-[42ch] text-sm leading-6 text-foreground-muted">
            {t.footer.description}
          </p>
        </div>

        <div>
          <p className="font-mono text-xs text-foreground-muted">
            {t.footer.navigation}
          </p>
          <nav className="mt-4 flex flex-col items-start gap-3" aria-label={t.footer.navigation}>
            <a href="#projects" className="text-sm font-medium hover:text-primary">
              {t.nav.projects}
            </a>
            <a
              href="https://theo.nxtaigen.com/"
              className="text-sm font-medium hover:text-primary"
            >
              {t.nav.portfolio}
            </a>
            <a
              href="https://github.com/scorpion7slayer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary"
            >
              <FontAwesomeIcon icon={faGithub} className="size-3.5" />
              {t.nav.github}
            </a>
          </nav>
        </div>

        <div className="flex flex-col items-start md:items-end">
          <a
            href="https://www.cloudflare.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-foreground"
          >
            <span>{t.footer.poweredBy}</span>
            <FontAwesomeIcon icon={faCloudflare} className="size-5 text-[#F48120]" />
            <span className="font-semibold text-foreground">Cloudflare</span>
          </a>
          <p className="mt-auto pt-8 text-sm text-foreground-muted md:text-right">
            © {year} NxtAIGen. {t.footer.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
