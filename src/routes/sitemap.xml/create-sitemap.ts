export interface SitemapEntry {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority: number;
  images?: { loc: string }[];
}

export function createSitemap(entries: SitemapEntry[]) {
  const baseUrl = "https://www.visitksamil.info";

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
          xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${entries
    .map((entry) => {
      const fullLoc = `${baseUrl}${entry.loc.startsWith("/") ? "" : "/"}${entry.loc}`;
      return `
    <url>
      <loc>${fullLoc}</loc>${
        entry.lastmod
          ? `
      <lastmod>${entry.lastmod}</lastmod>`
          : ""
      }${
        entry.changefreq
          ? `
      <changefreq>${entry.changefreq}</changefreq>`
          : ""
      }
      <priority>${entry.priority}</priority>${
        entry.images
          ? entry.images
              .map(
                (image) => `
      <image:image>
        <image:loc>${image.loc}</image:loc>
      </image:image>`,
              )
              .join("")
          : ""
      }
    </url>`;
    })
    .join("")}
  </urlset>`.trim();
}
