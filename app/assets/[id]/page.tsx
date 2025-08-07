'use client';

import { useEffect, useState } from 'react';
import { getAssetById, getMilestones } from '@/lib/data';
import MilestoneTimeline from '@/components/MilestoneTimeline';
import type { Asset } from '@/lib/types';

// Helper to ensure Asset always has milestones array
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
      // Ensure milestones property exists (even if empty)
      const assetWithMilestones = ensureAssetHasMilestones(assetData);
      setAsset(assetWithMilestones);

      // Load milestones for this asset (if needed for the timeline)
      const milestoneList = await getMilestones(params.id);
      setMilestones(milestoneList);
    };
    fetchData();
  }, [params.id]);

  if (!asset) return <div className="p-6">Asset not found</div>;

  return (
    <main className="p-6">
      <img src={asset.image} alt={asset.name} className="w-full h-60 object-cover mb-4 rounded" />
      <h1 className="text-2xl font-bold">{asset.name}</h1>
      <p className="mb-4 text-gray-700">{asset.description}</p>

      <h2 className="text-xl font-semibold mb-2">Timeline</h2>
      <MilestoneTimeline milestones={milestones} />
    </main>
  );
}