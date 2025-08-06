// app/gallery/page.tsx
import Link from 'next/link';
import { getAllAssets } from '@/lib/data';

export default function GalleryPage() {
  const assets = getAllAssets();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Asset Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {assets.map((asset) => (
          <Link key={asset.id} href={`/assets/${asset.id}`} className="border p-4 rounded shadow">
            <img src={asset.image} alt={asset.name} className="w-full h-40 object-cover mb-2" />
            <h2 className="text-xl font-semibold">{asset.name}</h2>
            <p className="text-sm">{asset.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
