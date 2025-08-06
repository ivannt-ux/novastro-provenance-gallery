'use client';

import { useEffect, useState } from 'react';
import { getAssets } from '@/lib/data';
import Link from 'next/link';

export default function GalleryPage() {
  const [assets, setAssets] = useState<any[]>([]);

  useEffect(() => {
    const fetchAssets = async () => {
      const data = await getAssets();
      setAssets(data);
    };
    fetchAssets();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Novastro Asset Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {assets.map((asset) => (
          <Link href={`/assets/${asset.id}`} key={asset.id}>
            <div className="border p-4 rounded shadow hover:shadow-lg transition">
              <h2 className="font-semibold text-lg">{asset.name}</h2>
              <p>{asset.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}