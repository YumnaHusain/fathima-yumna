export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  features: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  systemArchitecture?: string;
  highlightStat?: {
    label: string;
    value: string;
  };
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: {
    name: string;
    level?: string;
    iconName?: string;
  }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  period: string;
  description: string;
  skillsTags?: string[];
}

export interface StrengthCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  credentialId?: string;
}

export interface QuickStat {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  iconName: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}
