"use client";

import type { CSSProperties } from "react";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { formatProjectDate } from "@/lib/format-date";
import type { Project } from "@/types/project";

export function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (project: Project) => void;
}) {
  const visibleStack = project.stack.slice(0, 3);
  const remaining = project.stack.length - visibleStack.length;

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(project)}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 text-left shadow-sm transition-shadow hover:shadow-xl"
      style={{ "--project-accent": project.accent } as CSSProperties}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-(--project-accent) transition-transform duration-300 group-hover:scale-x-100"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-(--project-accent) opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-20"
      />

      <div className="flex items-start justify-between gap-3">
        <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-background">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.logo}
            alt=""
            className="size-full object-contain p-1.5"
          />
        </div>
        {project.featured && (
          <Badge
            variant="secondary"
            className="border-0 bg-(--project-accent)/15 text-(--project-accent)"
          >
            Featured
          </Badge>
        )}
      </div>

      <h3 className="mt-4 text-lg font-semibold tracking-tight">
        {project.name}
      </h3>
      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
        {project.tagline}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {visibleStack.map((tech) => (
          <Badge key={tech} variant="outline" className="font-normal text-muted-foreground">
            {tech}
          </Badge>
        ))}
        {remaining > 0 && (
          <Badge variant="outline" className="font-normal text-muted-foreground">
            +{remaining}
          </Badge>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
        <span>{formatProjectDate(project.date)}</span>
        <span className="font-medium text-foreground opacity-0 transition-opacity group-hover:opacity-100">
          View details →
        </span>
      </div>
    </motion.button>
  );
}
