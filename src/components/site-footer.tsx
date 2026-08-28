import { Heart } from "lucide-react";

import { socialIconMap } from "@/components/social-icons";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p className="flex items-center gap-1.5">
          Designed and developed by {profile.name}
          <Heart className="size-3.5 fill-primary text-primary" />
        </p>

        <ul className="flex items-center gap-1">
          {profile.social.map((link) => {
            const Icon = socialIconMap[link.icon];
            return (
              <li key={link.label}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="flex size-8 items-center justify-center rounded-full transition-colors hover:bg-accent hover:text-primary"
                >
                  <Icon className="size-3.5" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
