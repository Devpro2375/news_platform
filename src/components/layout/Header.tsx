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
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl text-primary hover:text-primary-dark transition-colors duration-300">
              SustainaNews
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 pl-44">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200">
            {t('nav.home')}
          </Link>
          <Link href="/news" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200">
            {t('nav.news')}
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200">
            {t('nav.about')}
          </Link>
          <Link href="/settings" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200">
            {t('nav.settings')}
          </Link>
        </nav>

        {/* Language & Theme Toggle + Mobile Menu Icon */}
        <div className="flex gap-4">
          <LanguageSelector />
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <Button 
            variant="outline" 
            size="icon" 
            className="md:hidden p-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 text-gray-700" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu (You can add a dropdown or slide-in effect later) */}
      <div className="md:hidden absolute top-16 left-0  w-full bg-white shadow-lg">
        {/* Example Mobile Menu */}
        <nav className="flex flex-col items-center gap-4 py-4">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200">
            {t('nav.home')}
          </Link>
          <Link href="/news" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200">
            {t('nav.news')}
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200">
            {t('nav.about')}
          </Link>
          <Link href="/settings" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200">
            {t('nav.settings')}
          </Link>
        </nav>
      </div>
    </header>
  );
}
