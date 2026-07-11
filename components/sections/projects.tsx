"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/shared/project-card";
import { Button } from "@/components/ui/button";
import { useLang } from "@/components/shared/lang-provider";
import { projects } from "@/lib/projects";

export function ProjectsSection() {
  const { t } = useLang();

  return (
    <section id="projects" className="scroll-mt-18 py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="grid gap-6 pb-12 md:grid-cols-12 md:items-end md:pb-16">
          <h2 className="max-w-[13ch] text-[clamp(2.7rem,6vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.038em] text-balance md:col-span-7">
            {t.projects.title}
          </h2>
          <p className="max-w-[56ch] text-base leading-7 text-foreground-muted text-pretty md:col-span-5 md:justify-self-end sm:text-lg sm:leading-8">
            {t.projects.description}
          </p>
        </div>

        <div>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-10 grid gap-8 rounded-xl bg-foreground px-6 py-8 text-background sm:px-9 sm:py-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12">
          <div>
            <h2 className="text-2xl font-bold tracking-[-0.025em] sm:text-3xl">
              {t.projects.openSourceTitle}
            </h2>
            <p className="mt-3 max-w-[62ch] text-sm leading-6 text-background sm:text-base">
              {t.projects.openSourceDescription}
            </p>
          </div>
          <Button asChild size="lg">
            <a
              href="https://github.com/scorpion7slayer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} data-icon="inline-start" />
              {t.projects.openSourceAction}
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
