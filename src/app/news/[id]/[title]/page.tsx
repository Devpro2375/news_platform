"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // For getting dynamic params in App Router
import { NewsArticle } from "@/types/news";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { newsArticles } from "@/data/translations";

const NewsDetailPage = () => {
  const { id, title } = useParams(); // Extracts both `id` and `title` from the URL
  const [article, setArticle] = useState<NewsArticle | null>(null);

  useEffect(() => {
    if (id) {
      // Match the article by ID (you can optionally check title, but it's more useful for SEO purposes)
      const articleData = newsArticles.find((article) => article.id === id);
      setArticle(articleData || null); // Set the article or null if not found
    }
  }, [id]);

  if (!article) {
    return <div className="text-center p-8 text-xl">Loading...</div>; // Improved loading state
  }

  // Filter out the current article from the news list for "Explore More"
  const exploreMoreArticles = newsArticles.filter((a) => a.id !== article.id).slice(0, 3); // Show 3 related articles

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-12">
      {/* Hero Section */}
      <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
        {article.imageUrl ? (
          <Image
            src={article.imageUrl}
            alt={article.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-xl">No Image Available</span>
          </div>
        )}
      </div>

      {/* Article Header */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">{article.title}</h1>
        <p className="text-gray-600 text-sm">
          <span className="font-semibold">Published on: </span>{formatDate(article.publishedAt)}
        </p>
      </div>

      {/* Article Content */}
      <div className="prose prose-lg text-gray-800 mb-8">
        <p>{article.summary}</p>
        <div>{article.content}</div>
      </div>

      {/* SDG Badges Section */}
      <div className="flex flex-wrap gap-3 mb-8">
        {article.sdgs.map((sdgId) => (
          <div key={sdgId} className="bg-blue-500 text-white font-semibold px-4 py-1 rounded-full text-sm shadow-md">
            {`SDG ${sdgId}`}
          </div>
        ))}
      </div>

      {/* Footer Actions */}
      <div className="flex gap-4 mb-8">
        <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200">
          Share
        </button>
        <button className="px-8 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-200">
          Bookmark
        </button>
      </div>

      {/* Explore More Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Explore More</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {exploreMoreArticles.map((article) => (
            <div key={article.id} className="flex flex-col items-start space-y-4">
              <div className="relative h-48 w-full rounded-lg overflow-hidden">
                {article.imageUrl ? (
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-xl">No Image</span>
                  </div>
                )}
              </div>
              <div className="text-lg font-semibold text-gray-900">{article.title}</div>
              <p className="text-sm text-gray-600">{article.summary}</p>
              <a href={`/news/${article.id}/${article.title.replace(/\s+/g, '-').toLowerCase()}`} className="text-blue-600 hover:underline">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
