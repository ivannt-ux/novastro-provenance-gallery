// lib/data.ts
export type Milestone = {
  id: string;
  date: string; // ISO
  description: string;
};

export type Asset = {
  id: string;
  name: string;
  description: string;
  image?: string;
  milestones: Milestone[];
};

// In-memory store (prototype). Replace with DB or on-chain calls later.
let assets: Asset[] = [];

/** Return all assets */
export function getAllAssets(): Asset[] {
  return assets;
}

/** Create and return new asset */
export function createAsset(data: { name: string; description: string; image?: string }): Asset {
  const asset: Asset = {
    id: Date.now().toString(),
    name: data.name,
    description: data.description,
    image: data.image,
    milestones: [
      {
        id: Date.now().toString(),
        date: new Date().toISOString(),
        description: "Asset created on Novastro",
      },
    ],
  };
  assets.unshift(asset);
  return asset;
}

/** Add milestone to an asset */
export function addMilestone(assetId: string, milestoneText: string): Milestone {
  const asset = assets.find((a) => a.id === assetId);
  if (!asset) throw new Error("Asset not found");
  const milestone: Milestone = {
    id: Date.now().toString(),
    date: new Date().toISOString(),
    description: milestoneText,
  };
  asset.milestones.push(milestone);
  return milestone;
}

/** Utility: get single asset */
export function getAssetById(id: string): Asset | undefined {
  return assets.find((a) => a.id === id);
}