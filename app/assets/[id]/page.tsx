import { getAssetById } from "./lib/data";
import MilestoneTimeline from "./components/MilestoneTimeline";
import { notFound } from "next/navigation";

export default function AssetProfilePage({ params }: { params: { id: string } }) {
  const asset = getAssetById(params.id);

  if (!asset) return notFound();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">{asset.name}</h2>
      <img src={asset.image} alt={asset.name} className="w-full max-w-md rounded mb-4" />
      <p className="mb-4">{asset.description}</p>
      <h3 className="font-semibold mb-2">Novastro On-chain Story:</h3>
      <MilestoneTimeline milestones={asset.milestones} />
    </div>
  );
}
