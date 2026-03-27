"use client";

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faTableCells,
  faRotate,
  faWandMagicSparkles,
  faArrowUpRightFromSquare,
  faDownload,
  faPlay,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { InstallModal } from "@/components/shared/install-modal";
import { useLang } from "@/components/shared/lang-provider";
import type { Project } from "@/lib/projects";

const iconMap: Record<string, Parameters<typeof FontAwesomeIcon>[0]["icon"]> = {
  nxtgit: faCodeBranch,
  nxtaicard: faTableCells,
  nxtupdate: faRotate,
  nxtaigen: faWandMagicSparkles,
};

interface ProjectCardProps {
  project: Project;
  eager?: boolean;
}

export function ProjectCard({ project, eager = false }: ProjectCardProps) {
  const [installOpen, setInstallOpen] = useState(false);
  const { lang, t } = useLang();
  const icon = iconMap[project.id] ?? faWandMagicSparkles;

  return (
    <>
      {/* Wrapper fixe : zone hover stable qui ne bouge jamais */}
      <article className="flex flex-col bg-background-card border border-border rounded-2xl overflow-hidden group hover:border-border-hover hover:shadow-[var(--shadow-hover)] transition-[box-shadow,border-color] duration-300 ease">
        {/* Screenshot */}
        <div className="relative w-full aspect-video overflow-hidden bg-background-secondary">
          <Image
            src={project.screenshot}
            alt={`Screenshot of ${project.name}`}
            fill
            loading={eager ? "eager" : "lazy"}
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 p-6">
          {/* Icon + Name */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-[10px] bg-accent-subtle flex-shrink-0">
              <FontAwesomeIcon icon={icon} className="w-4 h-4 text-accent" />
            </div>
            <h3 className="text-base font-semibold text-foreground">{project.name}</h3>
          </div>

          {/* Description */}
          <p className="text-sm text-foreground-muted leading-relaxed flex-1">
            {project.description[lang]}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-tag-bg text-tag-text">
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center flex-wrap gap-3 pt-1 border-t border-border">
            {/* Primary action */}
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors duration-200"
              >
                {t.card.visit}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3.5 h-3.5" />
              </a>
            ) : project.install ? (
              <button
                onClick={() => setInstallOpen(true)}
                className="flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faTerminal} className="w-3.5 h-3.5" />
                {t.card.install}
              </button>
            ) : (
              <span className="text-sm text-foreground-muted italic">{t.card.comingSoon}</span>
            )}

            {/* Secondary links with labels */}
            <div className="flex items-center gap-4 ml-auto">
              {project.releases && (
                <a
                  href={project.releases}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-foreground-muted hover:text-foreground transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={faDownload} className="w-4 h-4" />
                  {t.card.download}
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-foreground-muted hover:text-foreground transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={faPlay} className="w-4 h-4" />
                  {t.card.demo}
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-foreground-muted hover:text-foreground transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                {t.card.github}
              </a>
            </div>
          </div>
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
