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
    <Card className="overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 ease-in-out">
      {/* Image Section */}
      <div className="relative h-40 w-full overflow-hidden rounded-t-lg">
        {article.imageUrl ? (
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover rounded-t-lg"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 rounded-t-lg flex items-center justify-center">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </div>
      
      {/* Card Header */}
      <CardHeader className="px-4 pt-4">
        <CardTitle className="text-lg font-semibold text-primary truncate">{article.title}</CardTitle>
        <CardDescription className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
          <Clock className="h-4 w-4" />
          {formatDate(article.publishedAt)}
        </CardDescription>
      </CardHeader>

      {/* Card Content */}
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{article.summary}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {article.sdgs.map((sdgId) => (
            <SdgBadge key={sdgId} sdgId={sdgId} />
          ))}
        </div>
      </CardContent>

      {/* Card Footer */}
      <CardFooter className="p-4 flex justify-between items-center">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPlayAudio(article)}
          className="flex items-center gap-2 text-primary hover:bg-primary transition-all duration-200"
        >
          <Play className="h-4 w-4" />
          Listen
        </Button>

        {/* Link with ID and Title */}
        <Link href={`/news/${article.id}/${encodeURIComponent(article.title.toLowerCase().replace(/\s+/g, '-'))}`} passHref>
          <Button
            variant="default"
            size="sm"
            className="transition-all duration-200 hover:bg-primary hover:text-white"
          >
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
