"use client";

import * as React from "react";

import { Reveal } from "@/components/reveal";
import { ProjectCard } from "@/components/project-card";
import { ProjectDialog } from "@/components/project-dialog";
import { projects } from "@/data/projects";
import type { Project } from "@/types/project";

export function ProjectsSection() {
  const [selected, setSelected] = React.useState<Project | null>(null);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal className="max-w-xl">
        <p className="text-sm font-medium text-primary">Selected work</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Projects
        </h2>
        <p className="mt-3 text-muted-foreground">
          Android applications shipped between 2019 and 2022 — from
          consumer delivery apps to internal management systems.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={Math.min(i, 5) * 0.06}>
            <ProjectCard project={project} onSelect={setSelected} />
          </Reveal>
        ))}
      </div>

      <ProjectDialog
        project={selected}
        onOpenChange={(open) => !open && setSelected(null)}
      />
    </section>
  );
}
