export interface NavigationItem {
  label: string;
  route: string;
}

export interface ContentCard {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep extends ContentCard {
  number?: string;
}

export interface ChatMessage {
  from: 'customer' | 'assistant';
  text: string;
  time: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
