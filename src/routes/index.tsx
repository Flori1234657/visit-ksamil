import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { About } from "~/components/sections/about/about";
import { Hero } from "~/components/sections/hero/hero";
import { InteractiveMap } from "~/components/sections/interactiveMap/interactiveMap";
import { PopularAttractions } from "~/components/sections/popularAttractions/popularAttractions";
import { Transport } from "~/components/sections/transport/transport";
import { WhatToDo } from "~/components/sections/what-to-do/whatToDo";

import { useArticles, useAttractions } from "~/hooks/initialFetch";
export { useArticles, useAttractions };

export default component$(() => {
  const fetchedArticles = useArticles();
  const fetchedArttractions = useAttractions();

  return (
    <>
      <Hero />
      <About />
      {fetchedArticles.value && (
        <WhatToDo firstArticles={fetchedArticles.value} />
      )}
      {fetchedArttractions.value && (
        <PopularAttractions firstAttractions={fetchedArttractions.value} />
      )}
      <InteractiveMap />
      <Transport />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Visit Ksamil",
          url: "https://www.visitksamil.info",
          description:
            "Discover the best attractions, activities, and transport options in Ksamil, Albania.",
          image: [
            "https://res.cloudinary.com/doy1hhgfw/image/upload/v1741708402/ksamil-islands_iuaaxg.jpg",
            "https://res.cloudinary.com/doy1hhgfw/image/upload/v1741708401/ksamil-crystal-clear-water_d5xskg.jpg",
            "https://res.cloudinary.com/doy1hhgfw/image/upload/v1741708401/ksamil-hidden-gem_hvgknk.jpg",
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Ksamil",
            addressRegion: "Vlorë",
            addressCountry: "AL",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 39.7683,
            longitude: 19.9997,
          },
          author: {
            "@type": "Organization",
            name: "Visit Ksamil",
            url: "https://www.visitksamil.info",
            logo: "https://www.visitksamil.info/logo.webp",
          },
          publisher: {
            "@type": "Organization",
            name: "Visit Ksamil",
            logo: {
              "@type": "ImageObject",
              url: "https://www.visitksamil.info/logo.webp",
              width: 500,
              height: 500,
            },
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+355-68-839-3968",
            contactType: "customer service",
            areaServed: "Ksamil, Albania",
            availableLanguage: ["English", "Albanian"],
          },
          priceRange: "$",
          areaServed: "Ksamil Albania",
          breadcrumb: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.visitksamil.info",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "What to Do",
                item: "https://www.visitksamil.info/what-to-do/{id}",
              },
            ],
          },
        })}
      />
    </>
  );
});

export const head: DocumentHead = {
  title: "Visit Ksamil Albania 2025 | Beaches, Attractions & Travel Guide",
  meta: [
    {
      name: "description",
      content:
        "Plan your trip to Ksamil, Albania! Discover top attractions, must-see places, transport options, things to do, and local travel tips for 2025.",
    },
    {
      name: "keywords",
      content:
        "Ksamil, Albania, Ksamil beaches, travel, tourism, beaches, attractions, best places to visit, Ksamil hotels, Ksamil transport, Albanian Riviera",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:locale",
      content: "en_US",
    },
    {
      property: "og:title",
      content: "Visit Ksamil - Explore Albania’s Hidden Gem",
    },
    {
      property: "og:description",
      content:
        "Find the best activities, attractions, and transportation options for visiting Ksamil, Albania.",
    },
    {
      property: "og:image",
      content:
        "https://res.cloudinary.com/doy1hhgfw/image/upload/v1741708401/ksamil-crystal-clear-water_d5xskg.jpg",
    },
    {
      property: "og:url",
      content: "https://www.visitksamil.info",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Visit Ksamil - Explore Albania’s Hidden Gem",
    },
    {
      name: "twitter:description",
      content:
        "Plan your trip to Ksamil, Albania! Discover top attractions, transport options, and must-visit places.",
    },
    {
      name: "twitter:image",
      content:
        "https://res.cloudinary.com/doy1hhgfw/image/upload/v1741708401/ksamil-crystal-clear-water_d5xskg.jpg",
    },
    {
      name: "canonical",
      content: "https://www.visitksamil.info",
    },
    {
      name: "geo.region",
      content: "AL-12", // Albania Vlorë County code
    },
    {
      name: "geo.placename",
      content: "Ksamil, Vlorë, Albania",
    },
  ],
};
