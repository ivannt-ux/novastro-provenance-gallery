'use client';

import { useEffect, useState } from 'react';
import { getAssets } from '@/lib/data';
import Link from 'next/link';
import ImageUpload from "@/components/ImageUpload";
import { useState } from "react";

export default function GalleryPage() {
  const [images, setImages] = useState<string[]>([]);

  const handleImageUploaded = (url: string) => {
    setImages((prev) => [...prev, url]);
  };

  return (
    <div>
      <h2>Upload an image</h2>
      <ImageUpload onUploaded={handleImageUploaded} />
      <h3>Gallery</h3>
      <div style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
        {images.map((img, idx) => (
          <img key={idx} src={img} alt="Uploaded" style={{width:"200px"}} />
        ))}
      </div>
    </div>
  );
}

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
    <main className="flex flex-col items-center min-h-screen">
      <div className="card w-full max-w-4xl mx-auto mb-6 text-center">
        <h1 className="text-2xl font-bold mb-2">Novastro Asset Gallery</h1>
        <p className="text-blue-100">Browse all on-chain assets and their provenance.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
        {assets.map((asset) => (
          <Link href={`/assets/${asset.id}`} key={asset.id}>
            <div className="card cursor-pointer hover:scale-[1.03] transition duration-150 ease-in-out space-y-2">
              <h2 className="font-semibold text-lg text-white">{asset.name}</h2>
              <p className="text-blue-100">{asset.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}