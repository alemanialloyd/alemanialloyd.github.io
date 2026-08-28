export interface ProjectImage {
  /** Path to the screenshot, relative to /public */
  src: string;
  /** Determines the aspect ratio the carousel renders it at: mobile -> 9:16, web -> 16:9 */
  type: "mobile" | "web";
}

export interface ProjectLinks {
  website?: string;
  playStore?: string;
  appStore?: string;
}

export interface Project {
  /** Unique URL-safe identifier, also used as the folder name under /public/images/projects */
  slug: string;
  /** Display name */
  name: string;
  /** Short one-line description shown on the card */
  tagline: string;
  /** Longer description shown in the detail dialog */
  description?: string;
  /** ISO date string (YYYY-MM-DD), or just YYYY when only the year is known */
  date: string;
  /** Technologies / tools used */
  stack: string[];
  /** Path to the project logo, relative to /public. Use /images/logos/no_logo.png as a placeholder. */
  logo: string;
  /** Curated screenshots. Keep this short (4-8) for a snappy carousel. Leave empty until shots are ready. */
  images: ProjectImage[];
  /** Brand accent color (hex) used for the card glow, badges and carousel accents */
  accent: string;
  /** Links to the live product */
  links?: ProjectLinks;
  /** Feature this project more prominently */
  featured?: boolean;
}
