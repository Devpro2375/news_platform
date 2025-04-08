// src/app/page.tsx
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { sdgs } from '@/lib/sdgs';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 px-4 md:px-6 text-center bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto max-w-5xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              SustainaNews
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Spreading Awareness, One Summary at a Time
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
              Stay informed about global issues and UN Sustainable Development Goals through our AI-powered multilingual news platform.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/news" passHref>
                <Button size="lg" className="px-8">
                  Browse News
                </Button>
              </Link>
              <Link href="/about" passHref>
                <Button size="lg" variant="outline" className="px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Aligned with UN Sustainable Development Goals
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {sdgs.map((sdg) => (
            <Link
              key={sdg.id}
              href={`/news?sdg=${sdg.id}`}
              className="aspect-square rounded-lg flex flex-col items-center justify-center p-4 shadow-md hover:bg-opacity-90 transition-all"
              style={{ backgroundColor: sdg.color }}
            >
              <h3 className="text-white font-bold text-lg mb-2">SDG {sdg.id}</h3>
              <p className="text-white text-sm text-center">{sdg.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
        
        <section className="py-16 px-4 md:px-6 bg-muted">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Key Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold mb-4">SDG-Focused News</h3>
                <p>Access news articles categorized by the 17 UN Sustainable Development Goals, helping you stay informed about global challenges.</p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold mb-4">Multilingual Support</h3>
                <p>Read and listen to news in multiple languages, making information accessible regardless of language barriers.</p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow">
                <h3 className="text-xl font-bold mb-4">Text-to-Speech</h3>
                <p>Listen to news summaries with our text-to-speech feature, perfect for on-the-go consumption or accessibility needs.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t py-6 px-4 md:px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SustainaNews. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
