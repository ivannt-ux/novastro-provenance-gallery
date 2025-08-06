// app/assets/[id]/page.tsx
import { getAssetById } from '@/lib/data';
import MilestoneTimeline from '@/components/MilestoneTimeline';

export default function AssetProfilePage({ params }: { params: { id: string } }) {
  const asset = getAssetById(params.id);
  if (!asset) return <div className="p-6">Asset not found</div>;

  return (
    <main className="p-6">
      <img src={asset.image} alt={asset.name} className="w-full h-60 object-cover mb-4 rounded" />
      <h1 className="text-2xl font-bold">{asset.name}</h1>
      <p className="mb-4 text-gray-700">{asset.description}</p>

      <h2 className="text-xl font-semibold mb-2">Timeline</h2>
      <MilestoneTimeline milestones={asset.milestones} />
    </main>
  );
}
