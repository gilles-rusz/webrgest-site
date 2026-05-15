import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/demos/"],
      },
    ],
    sitemap: "https://www.webrgest.fr/sitemap.xml",
    host: "https://www.webrgest.fr",
  };
}
