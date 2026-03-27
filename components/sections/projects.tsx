"use client";

import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/shared/project-card";
import { projects } from "@/lib/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="pb-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${240 + i * 80}ms` }}
            >
              <ProjectCard project={project} eager={i === 0} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
