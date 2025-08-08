// Temporary in-memory storage (replace with DB or blockchain calls later)
let assets: {
  id: string;
  name: string;
  description: string;
  milestones: { date: string; description: string }[];
}[] = [];

export function getAllAssets() {
  return assets;
}

export function createAsset(assetData: { name: string; description: string }) {
  const newAsset = {
    id: Date.now().toString(),
    name: assetData.name,
    description: assetData.description,
    milestones: []
  };
  assets.push(newAsset);
  return newAsset;
}

export function addMilestone(
  assetId: string,
  milestoneData: { date: string; description: string }
) {
  const asset = assets.find((a) => a.id === assetId);
  if (!asset) throw new Error("Asset not found");
  asset.milestones.push(milestoneData);
  return asset;
}