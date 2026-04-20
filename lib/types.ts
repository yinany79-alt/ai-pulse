export interface NewsItem {
  id: string;
  title: string;
  company: 'OpenAI' | 'Anthropic' | 'Google' | 'Meta' | 'ByteDance';
  type: 'release' | 'skill' | 'update';
  description: string;
  date: string;
  url?: string;
  image?: string;
  size: 'small' | 'medium' | 'large';
  tags: string[];
}

export interface GitHubRepo {
  id: string;
  name: string;
  owner: string;
  description: string;
  language: string;
  stars: string;
  starsToday: string;
  url: string;
  image?: string;
  tags: string[];
}

export interface SkillItem {
  id: string;
  name: string;
  author: string;
  description: string;
  platform: 'GPT' | 'Claude' | 'Gemini' | 'OpenAI Agents';
  stars: string;
  url: string;
  image?: string;
  tags: string[];
}

export interface SalonItem {
  id: string;
  title: string;
  organizer: string;
  date: string;
  time: string;
  location: string;
  description: string;
  url?: string;
  image?: string;
  tags: string[];
}
