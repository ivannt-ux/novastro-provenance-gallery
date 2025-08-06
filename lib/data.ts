// @/lib/data.ts

export type Asset = {
  id: string;
  name: string;
  description: string;
  milestones: Milestone[];
};

export type Milestone = {
  id: string;
  title: string;
  date: string;
  description: string;
};

let assets: Asset[] = [];

export const getAssets = (): Asset[] => {
  return assets;
};

export const getAssetById = (id: string): Asset | undefined => {
  return assets.find((asset) => asset.id === id);
};

export const createAsset = (asset: Asset) => {
  assets.push(asset);
};

export const addMilestoneToAsset = (assetId: string, milestone: Milestone) => {
  const asset = getAssetById(assetId);
  if (asset) {
    asset.milestones.push(milestone);
  }
};
