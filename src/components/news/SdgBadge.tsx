import { sdgs } from '@/lib/sdgs';
import Link from 'next/link';


interface SdgBadgeProps {
  sdgId: number;
}

export function SdgBadge({ sdgId }: SdgBadgeProps) {
  const sdg = sdgs.find((s) => s.id === sdgId);

  if (!sdg) return null;

  return (
    <Link
      href={`/news?sdg=${sdgId}`}
      className="px-3 py-1 rounded-md text-sm font-medium transition-colors hover:bg-opacity-80"
      style={{ backgroundColor: sdg.color, color: '#fff' }}
    >
      SDG {sdg.id}: {sdg.title}
    </Link>
  );
}
