import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE = "https://csportcenter.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
