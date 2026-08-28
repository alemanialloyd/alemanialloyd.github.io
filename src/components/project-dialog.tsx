"use client";

import type { CSSProperties } from "react";
import { Apple, Globe, ImageOff, Play } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { formatProjectDate } from "@/lib/format-date";
import type { Project } from "@/types/project";

const linkMeta = [
  { key: "website", label: "Website", icon: Globe },
  { key: "playStore", label: "Play Store", icon: Play },
  { key: "appStore", label: "App Store", icon: Apple },
] as const;

export function ProjectDialog({
  project,
  onOpenChange,
}: {
  project: Project | null;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={!!project} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[calc(100%-2rem)] gap-0 p-0 sm:max-w-2xl"
        style={
          project
            ? ({ "--project-accent": project.accent } as CSSProperties)
            : undefined
        }
      >
        {project && (
          <>
            <div className="px-6 pt-6 pb-2 sm:px-8 sm:pt-8">
              <div className="flex items-start gap-4">
                <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-background">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.logo}
                    alt=""
                    className="size-full object-contain p-2"
                  />
                </div>
                <DialogHeader className="min-w-0 flex-1 text-left">
                  <DialogTitle className="text-xl">{project.name}</DialogTitle>
                  <DialogDescription>{project.tagline}</DialogDescription>
                </DialogHeader>
              </div>
            </div>

            {project.images.length > 0 ? (
              <div className="min-w-0 px-8 py-6 sm:px-12">
                <Carousel opts={{ loop: true }}>
                  <CarouselContent>
                    {project.images.map((image) => (
                      <CarouselItem
                        key={image.src}
                        className="flex items-center justify-center"
                      >
                        <div
                          className={cn(
                            "overflow-hidden rounded-xl border border-border bg-muted",
                            image.type === "mobile"
                              ? "aspect-9/16 h-[58vh] max-h-130"
                              : "aspect-video w-full"
                          )}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={image.src}
                            alt={`${project.name} screenshot`}
                            className="size-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            ) : (
              <div className="mx-6 flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-muted/40 py-14 text-sm text-muted-foreground sm:mx-8">
                <ImageOff className="size-5" />
                Screenshots coming soon
              </div>
            )}

            <div className="space-y-4 px-6 pb-6 sm:px-8 sm:pb-8">
              {project.description && (
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              )}
              {project.links && (
                <div className="flex flex-wrap gap-2">
                  {linkMeta.map(({ key, label, icon: Icon }) => {
                    const href = project.links?.[key];
                    if (!href) return null;
                    return (
                      <Button
                        key={key}
                        size="sm"
                        variant="outline"
                        className="rounded-full"
                        render={<a href={href} target="_blank" rel="noreferrer" />}
                      >
                        <Icon className="size-3.5" />
                        {label}
                      </Button>
                    );
                  })}
                </div>
              )}
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="border-0 bg-(--project-accent)/15 text-(--project-accent)"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                Shipped {formatProjectDate(project.date)}
              </p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
