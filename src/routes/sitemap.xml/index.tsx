// src/routes/sitemap.xml.ts
import type { RequestHandler } from "@builder.io/qwik-city";
import { createSitemap, type SitemapEntry } from "./create-sitemap";

const staticEntries: SitemapEntry[] = [
  {
    loc: "/",
    lastmod: "2025-03-10",
    changefreq: "weekly",
    priority: 1,
  },
  {
    loc: "/what-to-do/day-in-ksamil-islands-boat-tours-swimming",
    lastmod: "2025-03-13",
    changefreq: "monthly",
    priority: 0.8,
    images: [
      {
        loc: "https://res.cloudinary.com/doy1hhgfw/image/upload/v1741877206/ksamil-islands_uazbke_ouecwt.webp",
      },
    ],
  },
  {
    loc: "/what-to-do/underwater-diving-ksamil-marine-life-crystal-waters",
    lastmod: "2025-03-12",
    changefreq: "monthly",
    priority: 0.8,
    images: [
      {
        loc: "https://res.cloudinary.com/doy1hhgfw/image/upload/v1741877304/underwater_rv3ltp_ugxwl2.webp",
      },
    ],
  },
  {
    loc: "/what-to-do/explore-ksamil-military-history-bunkers-tunnels",
    lastmod: "2025-03-10",
    changefreq: "monthly",
    priority: 0.8,
    images: [
      {
        loc: "https://res.cloudinary.com/doy1hhgfw/image/upload/v1741877354/historic-article_ihbwrw_uz0f9o.webp",
      },
    ],
  },
  {
    loc: "/what-to-do/ksamil-lake-activities-fishing-boat-picnic",
    lastmod: "2025-03-11",
    changefreq: "monthly",
    priority: 0.8,
    images: [
      {
        loc: "https://res.cloudinary.com/doy1hhgfw/image/upload/v1741877393/butrint-lake_zsgey0_nwhtjc.webp",
      },
    ],
  },
];

export const onGet: RequestHandler = (ev) => {
  const sitemap = createSitemap(staticEntries);
  ev.headers.set("Content-Type", "text/xml");
  ev.send(200, sitemap);
};
