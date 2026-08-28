export interface SocialLink {
  label: string;
  url: string;
  icon: "facebook" | "linkedin" | "github" | "instagram";
}

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  social: SocialLink[];
}
