import type { MetadataRoute } from "next";

import { rayuiCategoriesMetadata } from "@/content/blocks-categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const home = {
    url: "https://rayui.so",
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 1,
  };

  const blocksPages = rayuiCategoriesMetadata.map((category) => ({
    url: `https://rayui.so/${category.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [home, ...blocksPages];
}
