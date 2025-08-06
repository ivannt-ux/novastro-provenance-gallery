type Milestone = {
  date: string;
  text: string;
};

type Asset = {
  id: string;
  name: string;
  image: string;
  description: string;
  milestones: Milestone[];
};

let assets: Asset[] = [];

export function getAllAssets(): Asset[] {
  return assets;
}

export function getAssetById(id: string): Asset | undefined {
  return assets.find((a) => a.id === id);
}

export function createAsset({
  name,
  image,
  description,
}: {
  name: string;
  image: string;
  description: string;
}): string {
  const newAsset: Asset = {
    id: Date.now().toString(),
    name,
    image,
    description,
    milestones: [
      {
        date: new Date().toISOString(),
        text: "Asset created on Novastro",
      },
    ],
  };
  assets.push(newAsset);
  return newAsset.id;
}

export function addMilestone(assetId: string, text: string) {
  const asset = getAssetById(assetId);
  if (asset) {
    asset.milestones.push({
      date: new Date().toISOString(),
      text,
    });
  }
}
