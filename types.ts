export interface Project {
  name: string;
  creator: string;
  description: string;
  highlight?: boolean;
}

export interface Topic {
  title: string;
  description: string;
}

export interface GraveyardItem {
  title: string;
  description: string;
  postmortem: string;
  status: "lost" | "abandoned" | "myth";
}

export interface LoreItem {
  id: string;
  title: string;
  description: string;
  story: string; // The "Explained View" content
  tags?: string[];
}

export interface Shoutout {
  role: string;
  name: string;
  description: string;
}

export interface Financials {
  item: string;
  value: string;
  trend: "up" | "down" | "neutral";
}

export interface Stats {
  members: number;
  projects: number;
  hours: string;
  command: string;
}

export interface CommunityFave {
  category: string;
  winner: string;
  description: string;
}
