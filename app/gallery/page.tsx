"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllAssets } from "@/lib/data";

interface Asset {
  id: string;
  name: string;
  description: string;
}

export default function GalleryPage() {
  const [assets, setAssets] = useState<Asset[]>([]);

  useEffect(() => {
    const loadAssets = async () => {
      try {
        const data = await getAllAssets();
        setAssets(data);
      } catch (err) {
        console.error("Error loading assets:", err);
      }
    };
    loadAssets();
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-white">Asset Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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