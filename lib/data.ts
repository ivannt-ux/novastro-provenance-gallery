import { Asset } from "./types";

const STORAGE_KEY = "novastro_assets";

export function getAssets(): Asset[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function getAssetById(id: string): Asset | undefined {
  return getAssets().find((a) => a.id === id);
}

export function addAsset(data: Omit<Asset, "id" | "milestones">) {
  const current = getAssets();
  const newAsset: Asset = {
    ...data,
    id: Date.now().toString(),
    milestones: [],
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify([newAsset, ...current]));
}

export function addMilestone(id: string, milestone: string) {
  const current = getAssets();
  const updated = current.map((asset) => {
    if (asset.id === id) {
      return {
        ...asset,
        milestones: [...asset.milestones, milestone],
      };
    }
    return asset;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}
