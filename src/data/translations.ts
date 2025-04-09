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
  {
    id: '3',
    title: 'Global Health Initiative Distributes Vaccines to Remote Regions',
    summary: 'A new global health initiative has successfully distributed vaccines to remote regions in Africa, helping protect thousands of lives.',
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi...',
    publishedAt: '2025-04-03T10:00:00Z',
    source: 'Global Health Journal',
    url: '#',
    imageUrl: '/images/vaccine-distribution.jpg',
    sdgs: [3, 10], // SDG 3: Good Health and Well-being, SDG 10: Reduced Inequalities
    sentiment: 'positive',
    audioUrl: '/audio/article-3-en.mp3'
  },
  {
    id: '4',
    title: 'Breakthrough in Battery Technology Could Revolutionize Clean Energy',
    summary: 'A team of scientists has announced a breakthrough in battery technology that could drastically improve energy storage and renewable energy usage.',
    content: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit...',
    publishedAt: '2025-04-02T15:45:00Z',
    source: 'Tech Innovations Today',
    url: '#',
    imageUrl: '/images/Lithium-ion-battery-3.jpg',
    sdgs: [7, 9, 13], // SDG 7: Affordable and Clean Energy, SDG 9: Industry, Innovation and Infrastructure, SDG 13: Climate Action
    sentiment: 'positive',
    audioUrl: '/audio/article-4-en.mp3'
  },
  {
    id: '5',
    title: 'Massive Reforestation Effort Begins in South America',
    summary: 'A large-scale reforestation effort has begun in South America to combat deforestation and restore vital ecosystems.',
    content: 'Donec vitae sapien ut libero venenatis faucibus. Nulla sit amet est sollicitudin, lacinia nisl id, porttitor erat...',
    publishedAt: '2025-04-01T09:00:00Z',
    source: 'Environmental News Today',
    url: '#',
    imageUrl: '/images/reforestation.jpg',
    sdgs: [13, 15], // SDG 13: Climate Action, SDG 15: Life on Land
    sentiment: 'positive',
    audioUrl: '/audio/article-5-en.mp3'
  },
  {
    id: '6',
    title: 'New Recycling Program Reduces Waste in Major Cities',
    summary: 'A new recycling program launched in major cities has already reduced waste by 25%, making a significant impact on urban sustainability.',
    content: 'Morbi nec orci et urna auctor interdum. Sed nec augue euismod, vestibulum ligula vel, faucibus augue...',
    publishedAt: '2025-03-31T14:30:00Z',
    source: 'Waste Management Weekly',
    url: '#',
    imageUrl: '/images/Beyond-Recycling-Policy-to-Achieve-Circular-Waste-Management1660.png',
    sdgs: [11, 12], // SDG 11: Sustainable Cities and Communities, SDG 12: Responsible Consumption and Production
    sentiment: 'positive',
    audioUrl: '/audio/article-6-en.mp3'
  },
  {
    id: '7',
    title: 'International Coalition Works to Provide Clean Drinking Water in Africa',
    summary: 'An international coalition has launched a project to provide clean drinking water to millions of people in Africa, improving health outcomes.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra dui ut libero feugiat, quis vestibulum orci auctor...',
    publishedAt: '2025-03-30T11:45:00Z',
    source: 'World Health Journal',
    url: '#',
    imageUrl: '/images/clean-water-africa.jpg',
    sdgs: [6, 10], // SDG 6: Clean Water and Sanitation, SDG 10: Reduced Inequalities
    sentiment: 'positive',
    audioUrl: '/audio/article-7-en.mp3'
  },
  {
    id: '8',
    title: 'Innovative Green Building Materials Reducing Construction Carbon Footprint',
    summary: 'New eco-friendly building materials are being adopted by the construction industry to reduce the carbon footprint of new buildings.',
    content: 'Proin tincidunt leo vel ligula fermentum, sit amet viverra neque scelerisque. Etiam dapibus, orci non egestas bibendum, ipsum neque...',
    publishedAt: '2025-03-29T16:30:00Z',
    source: 'Green Architecture News',
    url: '#',
    imageUrl: '/images/green_carbon.jpg',
    sdgs: [9, 11, 13], // SDG 9: Industry, Innovation and Infrastructure, SDG 11: Sustainable Cities and Communities, SDG 13: Climate Action
    sentiment: 'positive',
    audioUrl: '/audio/article-8-en.mp3'
  },
  {
    id: '9',
    title: 'World Leaders Commit to Sustainable Agricultural Practices',
    summary: 'In a groundbreaking agreement, world leaders have committed to sustainable agricultural practices to combat climate change and hunger.',
    content: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis...',
    publishedAt: '2025-03-28T12:00:00Z',
    source: 'Global Development Review',
    url: '#',
    imageUrl: '/images/aggriimage.jpg',
    sdgs: [2, 12], // SDG 2: Zero Hunger, SDG 12: Responsible Consumption and Production
    sentiment: 'positive',
    audioUrl: '/audio/article-9-en.mp3'
  },
  {
    id: '10',
    title: 'Artificial Intelligence Enhances Renewable Energy Forecasting',
    summary: 'A new artificial intelligence tool is significantly improving the accuracy of renewable energy forecasting, optimizing grid management.',
    content: 'Aliquam erat volutpat. Nam tristique enim ut metus interdum sollicitudin. Nullam venenatis augue et vestibulum...',
    publishedAt: '2025-03-27T10:30:00Z',
    source: 'Tech News Now',
    url: '#',
    imageUrl: '/images/Beyond-Recycling-Policy-to-Achieve-Circular-Waste-Management1660.png',
    sdgs: [7, 9], // SDG 7: Affordable and Clean Energy, SDG 9: Industry, Innovation and Infrastructure
    sentiment: 'positive',
    audioUrl: '/audio/article-10-en.mp3'
  },
  // Add more articles up to 50
  {
    id: '11',
    title: 'New Solar Initiative Brings Clean Energy to Rural Communities',
    summary: 'A groundbreaking solar initiative is bringing affordable clean energy to underserved rural communities.',
    content: 'Lorem ipsum dolor sit amet...',
    publishedAt: '2025-04-05T08:30:00Z',
    source: 'Climate Action News',
    url: '#',
    imageUrl: '/images/solar-panels.jpg',
    sdgs: [7, 10, 13],
    sentiment: 'positive',
    audioUrl: '/audio/article-1-en.mp3'
  },
  // Continue adding articles in this structure...
];
