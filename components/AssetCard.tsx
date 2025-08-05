import Link from "next/link";
import { Asset } from "@/lib/types";

export default function AssetCard({ asset }: { asset: Asset }) {
  return (
    <Link href={`/assets/${asset.id}`} className="border rounded p-4 block hover:bg-gray-50">
      <img src={asset.image} alt={asset.name} className="rounded mb-2 h-48 w-full object-cover" />
      <h3 className="text-lg font-semibold">{asset.name}</h3>
      <p className="text-sm text-gray-500">{asset.description.slice(0, 80)}...</p>
    </Link>
  );
}
