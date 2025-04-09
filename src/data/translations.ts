import { Translations } from '@/types/translations';

export const translations: Translations = {
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
  },
  es: {
    'app.title': 'SustainaNews',
    'app.subtitle': 'Difundiendo conciencia, un resumen a la vez',
    'nav.home': 'Inicio',
    'nav.news': 'Noticias',
    'nav.about': 'Acerca de',
    'nav.settings': 'Configuración',
    'filter.sdg': 'Filtrar por SDG',  // Add missing keys
    'filter.sentiment': 'Filtrar por Sentimiento',  // Add missing keys
    'language.en': 'Inglés',
    'language.es': 'Español',
    'language.fr': 'Francés',
    'language.hi': 'Hindi',
    'language.zh': 'Chino',
  },
  fr: {
    'app.title': 'SustainaNews',
    'app.subtitle': 'Sensibilisation, un résumé à la fois',
    'nav.home': 'Accueil',
    'nav.news': 'Actualités',
    'nav.about': 'À propos',
    'nav.settings': 'Paramètres',
    'filter.sdg': 'Filtrer par SDG',
    'filter.sentiment': 'Filtrer par Sentiment',
    'language.en': 'Anglais',
    'language.es': 'Espagnol',
    'language.fr': 'Français',
    'language.hi': 'Hindi',
    'language.zh': 'Chinois',
  },
  hi: {
    'app.title': 'SustainaNews',
    'app.subtitle': 'एक सारांश में जागरूकता फैलाना',
    'nav.home': 'मुख्य पृष्ठ',
    'nav.news': 'समाचार',
    'nav.about': 'हमारे बारे में',
    'nav.settings': 'सेटिंग्स',
    'filter.sdg': 'SDG द्वारा फ़िल्टर करें',
    'filter.sentiment': 'भावना द्वारा फ़िल्टर करें',
    'language.en': 'अंग्रेज़ी',
    'language.es': 'स्पैनिश',
    'language.fr': 'फ्रेंच',
    'language.hi': 'हिंदी',
    'language.zh': 'चीनी',
  },
  zh: {
    'app.title': 'SustainaNews',
    'app.subtitle': '一次摘要传播意识',
    'nav.home': '首页',
    'nav.news': '新闻',
    'nav.about': '关于我们',
    'nav.settings': '设置',
    'filter.sdg': '按SDG筛选',
    'filter.sentiment': '按情感筛选',
    'language.en': '英语',
    'language.es': '西班牙语',
    'language.fr': '法语',
    'language.hi': '印地语',
    'language.zh': '中文',
  },
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
  