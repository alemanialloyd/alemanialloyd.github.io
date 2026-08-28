export interface WorkExperience {
  company: string;
  title: string;
  /** e.g. "Remote", "Manila, Philippines" */
  location?: string;
  /** ISO date string (YYYY-MM) */
  startDate: string;
  /** ISO date string (YYYY-MM). Omit if this is the current role. */
  endDate?: string;
  /** Bullet points describing responsibilities and achievements */
  highlights?: string[];
  stack?: string[];
}
