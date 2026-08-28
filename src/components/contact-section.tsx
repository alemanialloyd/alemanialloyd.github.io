"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/data/profile";

const infoItems = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
  { icon: MapPin, label: profile.location, href: undefined },
];

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border bg-muted/30">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-28 md:grid-cols-2">
        <Reveal>
          <p className="text-sm font-medium text-primary">Get in touch</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build something.
          </h2>
          <p className="mt-3 max-w-sm text-muted-foreground">
            Have a project in mind or just want to say hello? My inbox is
            always open.
          </p>

          <ul className="mt-10 space-y-4">
            {infoItems.map(({ icon: Icon, label, href }) => {
              const content = (
                <span className="flex items-center gap-3 text-sm">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-4" />
                  </span>
                  {label}
                </span>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      className="text-foreground transition-colors hover:text-primary"
                    >
                      {content}
                    </a>
                  ) : (
                    <span className="text-foreground">{content}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            action={`mailto:${profile.email}`}
            method="post"
            encType="text/plain"
            className="space-y-5 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" name="name" required placeholder="Jane Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jane@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
              />
            </div>
            <Button type="submit" className="w-full rounded-full">
              Send message
              <Send className="size-4" />
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
