// utils/getImagePaths.ts

export function getImagePathsA(): [string[], string[]] {
  const images = import.meta.glob("../assets/pictures/A/*.{jpg,png,gif,webp}", { eager: true });
  const plan = import.meta.glob("../assets/pictures/A/plans/*.{jpg,png,gif,webp}", { eager: true });
  return [Object.values(images).map((mod: any) => mod.default), Object.values(plan).map((mod: any) => mod.default)];
}

export function getImagePathsB(): [string[], string[]] {
  const images = import.meta.glob("../assets/pictures/B/*.{jpg,png,gif,webp}", { eager: true });
  const plan = import.meta.glob("../assets/pictures/B/plans/*.{jpg,png,gif,webp}", { eager: true });
  return [Object.values(images).map((mod: any) => mod.default), Object.values(plan).map((mod: any) => mod.default)];
}

export function getImagePathsHome(): [string[], string[]] {
  const images = import.meta.glob("../assets/pictures/Home/*.{jpg,png,gif,webp}", { eager: true });
  const plan = import.meta.glob("../assets/pictures/Home*.{jpg,png,gif,webp}", { eager: true });
  return [Object.values(images).map((mod: any) => mod.default), []];
}
