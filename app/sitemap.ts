import { MetadataRoute } from "next";
import { companyDomain } from "../controlFolder/control";
import { navItems } from "../controlFolder/control";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${companyDomain}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${companyDomain}/menu`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${companyDomain}/about`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },

    {
      url: `${companyDomain}/contact`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.2,
    },

    {
      url: `${companyDomain}/reservation`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.3,
    },
  ];
}
