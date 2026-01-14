import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://psalmscoffee.com"; // Update with your actual domain

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/private/"], // Add any private routes here
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}


