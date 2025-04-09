import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { sdgs } from '@/lib/sdgs';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="py-20 px-4 md:px-6 text-center">
          <div className="container mx-auto max-w-5xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              SustainaNews
            </h1>
            <p className="text-lg md:text-2xl mb-8">
              Spreading Awareness, One Summary at a Time
            </p>
            <p className="text-xl mb-12 max-w-3xl mx-auto">
              Stay informed about global issues and the UN Sustainable Development Goals through our AI-powered multilingual news platform.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/news" passHref>
                <Button size="lg" variant={"default"} className="px-8 py-4 rounded-lg hover:bg-blue-700 duration-300">
                  Browse News
                </Button>
              </Link>
              <Link href="/about" passHref>
                <Button size="lg" variant="outline" className="px-8 py-4 rounded-lg hover:border-blue-700">
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
              Key Features of SustainaNews
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">SDG-Focused News</h3>
                <p>Stay up-to-date with news categorized by the 17 UN Sustainable Development Goals, helping you understand the world’s most critical issues.</p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Multilingual Support</h3>
                <p>Access news in multiple languages, breaking down barriers to ensure everyone can stay informed regardless of their primary language.</p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Text-to-Speech</h3>
                <p>Listen to news summaries with our advanced text-to-speech feature, making news consumption more accessible, especially for the visually impaired.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Why SustainaNews?
            </h2>
            <p className="text-lg mb-8 text-center">
              At SustainaNews, we are tackling global challenges head-on. We offer a platform where news aligns with the UN SDGs, breaking down information barriers and promoting action.
            </p>
            <div className="text-center">
              <Link href="/about" passHref>
                <Button size="lg" variant="default" className="px-8 py-4 rounded-lg">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
