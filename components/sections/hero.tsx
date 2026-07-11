"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLang } from "@/components/shared/lang-provider";

export function HeroSection() {
  const { lang, t } = useLang();

  return (
    <section className="relative overflow-hidden border-b border-border">
      <Container className="grid min-h-[calc(100svh-4.5rem)] lg:grid-cols-[minmax(0,0.86fr)_minmax(36rem,1.14fr)]">
        <div className="relative z-10 flex flex-col justify-center py-20 sm:py-24 lg:pr-16">
          <div className="animate-hero-copy">
            <Badge variant="outline">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
              {t.hero.badge}
            </Badge>

            <h1 className="mt-8 max-w-[11ch] text-[clamp(3.1rem,6vw,5.5rem)] font-extrabold leading-[0.96] tracking-[-0.038em] text-balance">
              {t.hero.title}{" "}
              <span className="text-primary before:inline-block before:w-[0.14em] before:content-['']">
                {t.hero.titleAccent}
              </span>
            </h1>

            <p className="mt-7 max-w-[58ch] text-base leading-7 text-foreground-muted text-pretty sm:text-lg sm:leading-8">
              {t.hero.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="#projects">
                  {t.hero.explore}
                  <FontAwesomeIcon icon={faArrowDown} data-icon="inline-end" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href="https://github.com/scorpion7slayer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} data-icon="inline-start" />
                  {t.hero.viewGithub}
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative flex min-h-[440px] items-center py-12 sm:min-h-[520px] lg:min-h-0 lg:py-16 lg:pl-12">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 bg-primary lg:left-0 lg:translate-x-0"
          />

          <div className="animate-hero-stage relative z-10 w-full">
            <div className="flex items-center justify-between font-mono text-xs text-primary-foreground">
              <span>{t.hero.stageLabel}</span>
              <span>{t.hero.stageCount}</span>
            </div>

            <div className="mt-4 overflow-hidden rounded-xl bg-surface ring-1 ring-black/20">
              <div className="flex h-10 items-center justify-between border-b border-border bg-surface px-4">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="size-2 rounded-full bg-project-blue" />
                  <span className="size-2 rounded-full bg-project-orange" />
                  <span className="size-2 rounded-full bg-project-green" />
                </div>
                <span className="font-mono text-xs text-foreground-muted">
                  NxtGit
                </span>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="size-3 text-foreground-muted"
                  aria-hidden="true"
                />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-deep">
                <Image
                  src="/screenshots/NxtGit.webp"
                  alt={
                    lang === "fr"
                      ? "Aperçu du projet NxtGit"
                      : "Preview of the NxtGit project"
                  }
                  fill
                  fetchPriority="high"
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </div>

            <div className="absolute -bottom-10 -left-3 hidden w-[46%] overflow-hidden rounded-lg bg-surface ring-1 ring-black/25 sm:block lg:-left-8">
              <div className="flex h-8 items-center justify-between border-b border-border bg-surface px-3">
                <span className="font-mono text-xs text-foreground-muted">
                  BenchSift
                </span>
                <span className="size-1.5 rounded-full bg-project-orange" aria-hidden="true" />
              </div>
              <div className="relative aspect-[16/9] overflow-hidden bg-surface-deep">
                <Image
                  src="/screenshots/NxtAICard.webp"
                  alt={
                    lang === "fr"
                      ? "Aperçu du catalogue de modèles BenchSift"
                      : "Preview of the BenchSift model catalog"
                  }
                  fill
                  loading="eager"
                  className="scale-[1.08] object-cover object-[center_20%]"
                  sizes="(max-width: 1024px) 45vw, 26vw"
                />
              </div>
            </div>

            <p className="mt-14 text-right font-mono text-xs text-primary-foreground sm:mt-16">
              {t.hero.stageCaption}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
