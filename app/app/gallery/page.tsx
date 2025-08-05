import { getAssets } from "@/lib/data";
import AssetCard from "@/components/AssetCard";

export default function GalleryPage() {
  const assets = getAssets();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {assets.map((asset) => (
        <AssetCard key={asset.id} asset={asset} />
      ))}
    </div>
  );
}
