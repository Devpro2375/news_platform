"use client"

import { Header } from '@/components/layout/Header';
import { NewsCard } from '@/components/news/NewsCard';
import { NewsFilter } from '@/components/news/NewsFilter';
import { AudioPlayer } from '@/components/news/AudioPlayer';

import { useState } from 'react';
import { NewsArticle } from '@/types/news';
import { newsArticles } from '@/data/translations';

export default function NewsPage() {
  const [selectedSDGs, setSelectedSDGs] = useState<number[]>([]);
  const [selectedSentiment, setSelectedSentiment] = useState<string>('all');
  const [currentAudioArticle, setCurrentAudioArticle] = useState<NewsArticle | null>(null);
  
  const filteredArticles = newsArticles.filter(article => {
    if (selectedSDGs.length > 0 && !article.sdgs.some(sdg => selectedSDGs.includes(sdg))) {
      return false;
    }
    
    if (selectedSentiment !== 'all' && article.sentiment !== selectedSentiment) {
      return false;
    }
    
    return true;
  });
  
  const handlePlayAudio = (article: NewsArticle) => {
    setCurrentAudioArticle(article);
  };
  
  const handleCloseAudio = () => {
    setCurrentAudioArticle(null);
  };

  return (
    <div className="flex flex-col min-h-screen">

      
      <main className="flex-1 container mx-auto py-8 px-4 md:px-6">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">
          Latest News
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <NewsFilter 
              selectedSDGs={selectedSDGs}
              onSDGChange={setSelectedSDGs}
              selectedSentiment={selectedSentiment}
              onSentimentChange={setSelectedSentiment}
            />
          </div>
          
          <div className="lg:col-span-3">
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map(article => (
                  <NewsCard 
                    key={article.id} 
                    article={article} 
                    onPlayAudio={handlePlayAudio}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  No news articles found matching your filters. Please adjust your filters to see results.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <AudioPlayer 
        article={currentAudioArticle} 
        onClose={handleCloseAudio} 
      />
    </div>
  );
}
