// src/components/news/SdgBadge.tsx
import { Badge } from '@/components/ui/badge';
import { sdgs } from '@/lib/sdgs';

import Link from 'next/link';

interface SdgBadgeProps {
  sdgId: number;
}

export function SdgBadge({ sdgId }: SdgBadgeProps) {
  const sdg = sdgs.find((s) => s.id === sdgId);

  if (!sdg) return null;

  return (
    <Link href={`/news?sdg=${sdgId}`} passHref>
      <a
        style={{
          backgroundColor: sdg.color,
          color: '#fff',
        }}
        className="hover:bg-opacity-80 px-3 py-1 rounded-md text-sm font-medium transition-colors"
      >
        SDG {sdg.id}: {sdg.title}
      </a>
    </Link>
  );
}
