// lib/data.ts

export type Asset = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export type Milestone = {
  id: string;
  assetId: string;
  title: string;
  description: string;
  date: string;
};

// Save new asset
export const createAsset = async (asset: Asset) => {
  if (typeof window === "undefined") return;
  const existing = await getAssets();
  localStorage.setItem("assets", JSON.stringify([...existing, asset]));
};

// Get all assets
export const getAssets = async (): Promise<Asset[]> => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem("assets");
  return data ? JSON.parse(data) : [];
};

// Get a single asset by ID
export const getAssetById = async (id: string): Promise<Asset | null> => {
  const assets = await getAssets();
  return assets.find((asset) => asset.id === id) || null;
};

// Get all milestones for an asset
export const getMilestones = async (assetId: string): Promise<Milestone[]> => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(`milestones-${assetId}`);
  return data ? JSON.parse(data) : [];
};

// ✅ This fixes the import error
export const addMilestone = async (assetId: string, milestone: Milestone) => {
  const existing = await getMilestones(assetId);
  const updated = [...existing, milestone];
  localStorage.setItem(`milestones-${assetId}`, JSON.stringify(updated));
};