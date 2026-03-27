"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faCloudflare } from "@fortawesome/free-brands-svg-icons";
import { Container } from "@/components/layout/container";
import { useLang } from "@/components/shared/lang-provider";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-6 mt-auto">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground-muted">
          © {year} NxtAIGen. {t.footer.rights}
        </p>

        <a
          href="https://www.cloudflare.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors duration-200 group"
        >
          <span className="text-xs">Powered by</span>
          <FontAwesomeIcon
            icon={faCloudflare}
            className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity duration-200"
            style={{ color: "#F48120" }}
          />
          <span className="text-sm font-medium">Cloudflare</span>
        </a>

        <a
          href="https://github.com/scorpion7slayer"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
          GitHub
        </a>
      </Container>
    </footer>
  );
}
