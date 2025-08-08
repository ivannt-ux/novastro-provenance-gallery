"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getAllAssets } from "@/lib/data";
import { getAccountId, connectWallet } from "@/lib/near";

export default function GalleryPage() {
  const [assets, setAssets] = useState<any[]>([]);
  const [accountId, setAccountId] = useState<string | null>(null);

  useEffect(() => {
    getAccountId().then(setAccountId);
  }, []);

  useEffect(() => {
    if (accountId) {
      setAssets(getAllAssets());
    }
  }, [accountId]);

  if (!accountId) {
    return (
      <main className="p-6 flex flex-col items-center">
        <p className="text-white mb-4">Please connect your wallet to view the gallery.</p>
        <button
          onClick={connectWallet}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Connect Wallet
        </button>
      </main>
    );
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-white">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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