"use client";

import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { experience } from "@/data/experience";
import { formatDateRange } from "@/lib/format-date";

export function ExperienceSection() {
  if (experience.length === 0) return null;

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal className="max-w-xl">
        <p className="text-sm font-medium text-primary">Career</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Work experience
        </h2>
      </Reveal>

      <ol className="relative mt-12 space-y-10 border-s border-border ps-8">
        {experience.map((role, i) => (
          <Reveal as="li" key={`${role.company}-${role.startDate}`} delay={Math.min(i, 5) * 0.06}>
            <span className="absolute -start-[7px] mt-1.5 size-3 rounded-full border-2 border-primary bg-background" />

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold tracking-tight">
                {role.title} <span className="text-muted-foreground">· {role.company}</span>
              </h3>
              <span className="text-sm text-muted-foreground">
                {formatDateRange(role.startDate, role.endDate)}
              </span>
            </div>

            {role.location && (
              <p className="mt-1 text-sm text-muted-foreground">{role.location}</p>
            )}

            {role.highlights && role.highlights.length > 0 && (
              <ul className="mt-3 max-w-2xl list-disc space-y-1.5 ps-4 text-sm text-muted-foreground marker:text-primary/60">
                {role.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}

            {role.stack && role.stack.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {role.stack.map((tech) => (
                  <Badge key={tech} variant="outline" className="font-normal text-muted-foreground">
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
