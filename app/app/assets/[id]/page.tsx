import { getAssetById } from "../../../../lib/data";
import MilestoneTimeline from "../../../../components/MilestoneTimeline";

export default function AssetProfile({ params }: { params: { id: string } }) {
  const asset = getAssetById(params.id);

  if (!asset) {
    return <p>Asset not found</p>;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{asset.name}</h1>
      <p>{asset.description}</p>
      <img src={asset.image} alt={asset.name} className="rounded-lg w-full max-w-md" />
      <MilestoneTimeline milestones={asset.milestones} />
      <footer className="text-sm mt-6 text-gray-500">
        Asset on-chain history powered by Novastro.
      </footer>
    </div>
  );
}
