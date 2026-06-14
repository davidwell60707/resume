export type Locale = "zh-TW" | "en";

export interface SocialLink {
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  englishName: string;
  title: string;
  statement: string;
  summary: string;
  location: string;
  availability: string;
  email: string;
  socials: SocialLink[];
}

export interface ValueProposition {
  index: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  sector: string;
  title: string;
  period: string;
  role: string;
  summary: string;
  contributions: string[];
  technologies: string[];
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  location: string;
  summary: string;
  technologies: string[];
}

export interface SkillGroup {
  title: string;
  description: string;
  items: string[];
}

export interface Education {
  heading: string;
  intro: string;
  items: Array<{ label: string; value: string }>;
}

export interface Labels {
  nav: Record<"profile" | "work" | "experience" | "toolkit" | "about" | "contact", string>;
  actions: Record<"contact" | "resume" | "expand" | "collapse" | "backToTop", string>;
  sections: Record<"values" | "valuesLead" | "projects" | "projectsLead" | "experience" | "experienceLead" | "skills" | "skillsLead" | "about" | "contact" | "contactLead", string>;
  meta: Record<"role" | "contribution" | "technology", string>;
}

export interface ResumeContent {
  profile: Profile;
  values: ValueProposition[];
  projects: Project[];
  experience: Experience[];
  skills: SkillGroup[];
  education: Education;
  labels: Labels;
}

export type LocalizedContent = Record<Locale, ResumeContent>;
