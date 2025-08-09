"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getAllAssets } from "@/lib/data";
import { getAccountId, connectWallet } from "@/lib/near";

export default function GalleryPage() {
  const [assets, setAssets] = useState<any[]>([]);
  const [accountId, setAccountId] = useState<string | null>(null);

  useEffect(() => {
    getAccountId().then((a) => {
      setAccountId(a);
      if (a) {
        setAssets(getAllAssets());
      }
    });
  }, []);

  if (!accountId) {
    return (
      <main className="p-6">
        <p>Please connect wallet to view the gallery.</p>
        <button onClick={() => connectWallet()} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Connect Wallet</button>
      </main>
    );
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {assets.map((asset) => (
          <Link key={asset.id} href={`/assets/${asset.id}`}>
            <div className="border p-4 rounded">
              <h2 className="font-semibold">{asset.name}</h2>
              <p className="text-sm text-gray-600">{asset.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}