// src/data/news.ts
import { NewsArticle } from '@/types/news';
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
  
  
  export const newsArticles = [
    {
      id: "1",
      title: "New Solar Initiative Brings Clean Energy to Rural Communities",
      summary:
        "A groundbreaking solar initiative is bringing affordable clean energy to underserved rural communities, providing electricity to households for the first time.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod tellus at magna venenatis, eget bibendum nisl aliquam...",
      publishedAt: "2025-04-05T08:30:00Z",
      source: "Climate Action News",
      url: "#",
      imageUrl: "/images/solar-panels.jpg",
      sdgs: [7, 10, 13],
      sentiment: "positive",
      audioUrl: "/audio/article-1-en.mp3",
    },
    {
      id: "2",
      title: "Ocean Plastic Collection Effort Removes 50 Tons of Waste",
      summary:
        "A collaborative international effort has successfully removed 50 tons of plastic waste from ocean waters, protecting marine ecosystems.",
      content:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel...",
      publishedAt: "2025-04-04T14:15:00Z",
      source: "Marine Conservation Report",
      url: "#",
      imageUrl: "/images/ocean-cleanup.jpg",
      sdgs: [14, 15, 17],
      sentiment: "positive",
      audioUrl: "/audio/article-2-en.mp3",
    },
    {
      id: "3",
      title: "Innovative Farming Techniques Boost Crop Yields in Africa",
      summary:
        "New farming techniques are helping African farmers increase crop yields while conserving water and reducing environmental impact.",
      content:
        "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus...",
      publishedAt: "2025-04-03T10:00:00Z",
      source: "Agriculture Today",
      url: "#",
      imageUrl: "/images/farming.jpg",
      sdgs: [2, 12, 13],
      sentiment: "positive",
      audioUrl: "/audio/article-3-en.mp3",
    },
    {
      id: "4",
      title: "Tech Companies Collaborate to Reduce E-Waste",
      summary:
        "Major tech companies are joining forces to create a circular economy for electronics, reducing e-waste and promoting recycling.",
      content:
        "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt...",
      publishedAt: "2025-04-02T09:00:00Z",
      source: "Tech Sustainability News",
      url: "#",
      imageUrl: "/images/e-waste.jpg",
      sdgs: [9, 12, 17],
      sentiment: "neutral",
      audioUrl: "/audio/article-4-en.mp3",
    },
    {
        id: "5",
        title: "Global Efforts to Combat Deforestation Show Promise Worldwide",
        summary:
          "International initiatives to combat deforestation are showing positive results with reforestation projects gaining momentum worldwide.",
        content:
          "Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat...",
        publishedAt: "2025-04-01T11:00:00Z",
        source: "Forest Today",
        url: "#",
        imageUrl: "/images/deforestation.jpg",
        sdgs: [13, 15, 17],
        sentiment: "positive",
        audioUrl: "/audio/article-5-en.mp3",
      },
      {
        id: "6",
        title: "Breakthrough in Water Purification Technology",
        summary:
          "Scientists have developed a new water purification technology that could bring clean drinking water to millions of people worldwide.",
        content:
          "Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Donec sollicitudin molestie malesuada...",
        publishedAt: "2025-03-30T09:30:00Z",
        source: "Global Science News",
        url: "#",
        imageUrl: "/images/water-purification.jpg",
        sdgs: [6, 9, 12],
        sentiment: "positive",
        audioUrl: "/audio/article-6-en.mp3",
      },
      {
        id: "7",
        title: "Affordable Housing Projects Transform Urban Areas",
        summary:
          "New affordable housing projects are transforming urban areas, providing safe and sustainable homes for low-income families.",
        content:
          "Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae...",
        publishedAt: "2025-03-28T15:00:00Z",
        source: "Urban Development Weekly",
        url: "#",
        imageUrl: "/images/affordable-housing.jpg",
        sdgs: [11, 10],
        sentiment: "positive",
        audioUrl: "/audio/article-7-en.mp3",
      },
      {
        id: "8",
        title: "Youth-Led Climate Action Gains Global Recognition",
        summary:
          "Youth activists around the world are gaining recognition for their efforts in combating climate change and promoting sustainability.",
        content:
          "Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada...",
        publishedAt: "2025-03-25T12:45:00Z",
        source: "Youth Climate Action News",
        url: "#",
        imageUrl: "/images/youth-climate-action.jpg",
        sdgs: [13, 17],
        sentiment: "positive",
        audioUrl: "/audio/article-8-en.mp3",
      },
    ]