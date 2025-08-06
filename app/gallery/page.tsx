import { getAllAssets } from "../../../lib/data";
import AssetCard from "../../../components/AssetCard";

export default function GalleryPage() {
  const assets = getAllAssets();

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Asset Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {assets.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </div>
    </div>
  );
}
