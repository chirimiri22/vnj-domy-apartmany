// utils/getImagePaths.ts


export function getImagePaths(): string[] {
  const images = import.meta.glob("../assets/pictures/*.{jpg,png,gif,webp}", { eager: true });
  console.log("load images");
  return Object.values(images).map((mod: any) => mod.default);
}

export const getImagesFiltered = (filter: string): string[] => {
  const allImages = getImagePaths();
  if (!filter) return allImages;

  const filteredImages = allImages.filter((imagePath) => {
    const fileName = imagePath.split("/").pop() || "";
    return fileName.toLowerCase().includes(filter.toLowerCase());
  });

  return filteredImages;
};
