// src/types/news.ts
export type NewsArticle = {
    id: string;
    title: string;
    summary: string;
    content: string;
    publishedAt: string;
    source: string;
    url: string;
    imageUrl: string;
    sdgs: number[];
    sentiment: 'positive' | 'negative' | 'neutral';
    audioUrl: string;
  };
  
  // src/types/sdg.ts
  export type SDG = {
    id: number;
    title: string;
    description: string;
    color: string;
    icon: string;
  };
  