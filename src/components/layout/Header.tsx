// src/components/layout/Header.tsx
"use client"

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { LanguageSelector } from '@/components/common/LanguageSelector';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export function Header() {
  const { t } = useLanguage();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">SustainaNews</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            {t('nav.home')}
          </Link>
          <Link href="/news" className="text-sm font-medium transition-colors hover:text-primary">
            {t('nav.news')}
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            {t('nav.about')}
          </Link>
          <Link href="/settings" className="text-sm font-medium transition-colors hover:text-primary">
            {t('nav.settings')}
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <LanguageSelector />
          <ThemeToggle />
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
