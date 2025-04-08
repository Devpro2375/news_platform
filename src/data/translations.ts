// src/data/translations.ts
export const translations = {
    en: {
      'app.title': 'SustainaNews',
      'app.subtitle': 'Spreading Awareness, One Summary at a Time',
      'nav.home': 'Home',
      'nav.news': 'News',
      'nav.about': 'About',
      'nav.settings': 'Settings',
      'filter.sdg': 'Filter by SDG',
      'filter.sentiment': 'Filter by Sentiment',
      'language.en': 'English',
      'language.es': 'Spanish',
      'language.fr': 'French',
      'language.hi': 'Hindi',
      'language.zh': 'Chinese',
      // Add more translations as needed
    },
    es: {
      'app.title': 'SustainaNews',
      'app.subtitle': 'Difundiendo conciencia, un resumen a la vez',
      'nav.home': 'Inicio',
      'nav.news': 'Noticias',
      'nav.about': 'Acerca de',
      'nav.settings': 'Configuración',
      // Add more translations as needed
    },
    // Add other languages
    fr: { /* French translations */ },
    hi: { /* Hindi translations */ },
    zh: { /* Chinese translations */ },
  };
  
  // src/data/news.ts
  import { NewsArticle } from '@/types/news';
  
  export const newsArticles: NewsArticle[] = [
    {
      id: '1',
      title: 'New Solar Initiative Brings Clean Energy to Rural Communities',
      summary: 'A groundbreaking solar initiative is bringing affordable clean energy to underserved rural communities, providing electricity to households for the first time.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod tellus at magna venenatis, eget bibendum nisl aliquam...',
      publishedAt: '2025-04-05T08:30:00Z',
      source: 'Climate Action News',
      url: '#',
      imageUrl: '/images/solar-panels.jpg',
      sdgs: [7, 10, 13], // SDG 7: Affordable and Clean Energy, SDG 10: Reduced Inequalities, SDG 13: Climate Action
      sentiment: 'positive',
      audioUrl: '/audio/article-1-en.mp3'
    },
    {
      id: '2',
      title: 'Ocean Plastic Collection Effort Removes 50 Tons of Waste',
      summary: 'A collaborative international effort has successfully removed 50 tons of plastic waste from ocean waters, protecting marine ecosystems.',
      content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel...',
      publishedAt: '2025-04-04T14:15:00Z',
      source: 'Marine Conservation Report',
      url: '#',
      imageUrl: '/images/ocean-cleanup.jpg',
      sdgs: [14, 15, 17], // SDG 14: Life Below Water, SDG 15: Life on Land, SDG 17: Partnerships for the Goals
      sentiment: 'positive',
      audioUrl: '/audio/article-2-en.mp3'
    },
    // Add more mock articles
  ];
  