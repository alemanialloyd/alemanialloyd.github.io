"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { socialIconMap } from "@/components/social-icons";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="bg-grid relative flex min-h-svh items-center overflow-hidden pt-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklch,var(--primary)_18%,transparent),transparent)]"
      />

      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.2fr_1fr] md:items-center"
      >
        <div>
          <motion.p
            variants={item}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Available for new projects
          </motion.p>

          <motion.h1
            variants={item}
            className="text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            {profile.firstName}
            <br />
            <span className="text-muted-foreground">{profile.lastName}.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-lg text-muted-foreground"
          >
            {profile.summary}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="rounded-full"
              render={<a href="#projects" />}
            >
              View projects
              <ArrowDown className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full"
              render={<a href="#contact" />}
            >
              Get in touch
            </Button>
          </motion.div>

          <motion.ul variants={item} className="mt-10 flex items-center gap-2">
            {profile.social.map((link) => {
              const Icon = socialIconMap[link.icon];
              return (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              );
            })}
          </motion.ul>
        </div>

        <motion.div
          variants={item}
          className="relative hidden aspect-square items-center justify-center md:flex"
        >
          <div className="absolute inset-6 rounded-full border border-dashed border-border" />
          <div className="absolute inset-16 rounded-full border border-border" />
          {projects.slice(0, 6).map((p, i) => {
            const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
            const radius = 42;
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);
            return (
              <motion.div
                key={p.slug}
                className="absolute flex size-14 items-center justify-center rounded-2xl border border-border bg-card shadow-lg"
                style={{ left: `${x}%`, top: `${y}%`, translate: "-50% -50%" }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.logo}
                  alt=""
                  className="size-8 rounded-md object-contain"
                />
              </motion.div>
            );
          })}
          <div className="flex size-28 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-sm font-semibold text-primary">
            {projects.length}+ apps
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
