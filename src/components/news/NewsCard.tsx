import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Clock } from 'lucide-react';
import { SdgBadge } from './SdgBadge';
import { formatDate } from '@/lib/utils';
import { NewsArticle } from '@/types/news';
import Link from 'next/link';
import Image from 'next/image';

interface NewsCardProps {
  article: NewsArticle;
  onPlayAudio: (article: NewsArticle) => void;
}

export function NewsCard({ article, onPlayAudio }: NewsCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      {article.imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <CardHeader className="p-4">
        <CardTitle className="line-clamp-2 text-lg font-bold">{article.title}</CardTitle>
        <CardDescription className="flex items-center gap-1 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          {formatDate(article.publishedAt)}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {article.summary}
        </p>
        <div className="flex flex-wrap gap-2">
          {article.sdgs.map((sdgId) => (
            <SdgBadge key={sdgId} sdgId={sdgId} />
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => onPlayAudio(article)}
          className="flex items-center gap-1"
        >
          <Play className="h-4 w-4" />
          Listen
        </Button>
        <Link href={`/news/${article.id}`} className="text-primary hover:underline">
          <Button variant="default" size="sm">
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
