'use client';

import { useEffect, useState } from 'react';
import { getAssetById, getMilestones } from '@/lib/data';
import MilestoneTimeline from '@/components/MilestoneTimeline';
import type { Asset } from '@/lib/types';

function ensureAssetHasMilestones(asset: any): Asset | null {
  if (!asset) return null;
  return {
    ...asset,
    milestones: Array.isArray(asset.milestones) ? asset.milestones : [],
  };
}

export default function AssetProfilePage({ params }: { params: { id: string } }) {
  const [asset, setAsset] = useState<Asset | null>(null);
  const [milestones, setMilestones] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const assetData = await getAssetById(params.id);
      const assetWithMilestones = ensureAssetHasMilestones(assetData);
      setAsset(assetWithMilestones);
      const milestoneList = await getMilestones(params.id);
      setMilestones(milestoneList);
    };
    fetchData();
  }, [params.id]);

  if (!asset) return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="card max-w-xl w-full mx-auto text-center">
        <p>Asset not found</p>
      </div>
    </main>
  );

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="card max-w-xl w-full mx-auto space-y-4">
        <img
          src={asset.image}
          alt={asset.name}
          className="w-full h-60 object-cover rounded"
        />
        <h1 className="text-2xl font-bold text-white">{asset.name}</h1>
        <p className="mb-4 text-blue-100">{asset.description}</p>
        <h2 className="text-xl font-semibold mb-2 text-white">Timeline</h2>
        <MilestoneTimeline milestones={milestones} />
      </div>
    </main>
  );
}