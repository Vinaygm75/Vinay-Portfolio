export interface Skill {
  name: string;
  level: number; // percentage, e.g. 90
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface StatisticCard {
  value: string;
  label: string;
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tech: string[];
  duration?: string;
  description: string;
  projectLink?: string;
  projectImage?: string;
  accentColor?: string;
}

export interface CertificationItem {
  title: string;
  provider: string;
  location?: string;
  details?: string;
  credentialId?: string;
}

export interface AchievementItem {
  value: string;
  label: string;
  description: string;
}
