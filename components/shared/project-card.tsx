"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faDownload,
  faPlay,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { InstallModal } from "@/components/shared/install-modal";
import { useLang } from "@/components/shared/lang-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

type ProjectStyle = CSSProperties & {
  "--project-accent": string;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [installOpen, setInstallOpen] = useState(false);
  const { lang, t } = useLang();
  const reverse = index % 2 === 1;
  const style: ProjectStyle = { "--project-accent": project.accent };

  return (
    <>
      <article
        className="grid items-center gap-9 border-t border-border py-12 md:py-16 lg:grid-cols-12 lg:gap-14 lg:py-20"
        style={style}
      >
        <div
          className={cn(
            "lg:col-span-7",
            reverse && "lg:order-2"
          )}
        >
          <div className="group overflow-hidden rounded-xl bg-surface ring-1 ring-border transition-colors duration-300 hover:ring-border-strong">
            <div className="flex h-11 items-center justify-between border-b border-border bg-surface px-4">
              <div className="flex items-center gap-2">
                <span
                  className="size-2 rounded-full"
                  style={{ backgroundColor: "var(--project-accent)" }}
                  aria-hidden="true"
                />
                <span className="font-mono text-xs text-foreground-muted">
                  {project.name}
                </span>
              </div>
              <span className="hidden font-mono text-xs text-foreground-muted sm:inline">
                {project.category[lang]}
              </span>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden bg-surface-deep">
              <Image
                src={project.screenshot}
                alt={
                  lang === "fr"
                    ? `Aperçu du projet ${project.name}`
                    : `Preview of the ${project.name} project`
                }
                fill
                loading="lazy"
                className={cn(
                  "object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.015]",
                  project.id === "nxtupdate" &&
                    "origin-top-left scale-[1.7] group-hover:scale-[1.72]",
                  project.id === "nxtaicard" && "scale-[1.04] object-[center_18%] group-hover:scale-[1.055]"
                )}
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </div>
        </div>

        <div
          className={cn(
            "flex flex-col items-start lg:col-span-5",
            reverse && "lg:order-1"
          )}
        >
          <Badge variant="outline">{project.category[lang]}</Badge>

          <h3 className="mt-5 text-[clamp(2.35rem,5vw,4.5rem)] font-extrabold leading-none tracking-[-0.035em] text-balance">
            {project.name}
          </h3>

          <p className="mt-5 max-w-[56ch] text-base leading-7 text-foreground-muted text-pretty sm:text-lg sm:leading-8">
            {project.description[lang]}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.href ? (
              <Button asChild>
                <a href={project.href} target="_blank" rel="noopener noreferrer">
                  {t.card.visit}
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    data-icon="inline-end"
                  />
                </a>
              </Button>
            ) : project.install ? (
              <Button onClick={() => setInstallOpen(true)}>
                <FontAwesomeIcon icon={faTerminal} data-icon="inline-start" />
                {t.card.install}
              </Button>
            ) : (
              <Badge variant="secondary">{t.card.comingSoon}</Badge>
            )}

            <Button asChild variant="outline">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} data-icon="inline-start" />
                {t.card.github}
              </a>
            </Button>
          </div>

          {(project.releases || project.demo) && (
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium">
              {project.releases && (
                <a
                  href={project.releases}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground-muted transition-colors hover:text-foreground"
                >
                  <FontAwesomeIcon icon={faDownload} className="size-3.5" />
                  {t.card.download}
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground-muted transition-colors hover:text-foreground"
                >
                  <FontAwesomeIcon icon={faPlay} className="size-3.5" />
                  {t.card.demo}
                </a>
              )}
            </div>
          )}
        </div>
      </article>

      {project.install && (
        <InstallModal
          open={installOpen}
          onClose={() => setInstallOpen(false)}
          install={project.install}
        />
      )}
    </>
  );
}
