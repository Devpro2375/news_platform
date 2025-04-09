// src/components/Providers.tsx

import { LanguageProvider } from '@/contexts/LanguageContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    
      <LanguageProvider>{children}</LanguageProvider>

  );
}
