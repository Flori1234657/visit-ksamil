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

      {/* SEO: JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        // @ts-ignore
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Visit Ksamil",
            url: "https://visitksamil.com",
            description:
              "Discover the best attractions, activities, and transport options in Ksamil, Albania.",
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
            },
            image: "https://visitksamil.com/ksamil-cover.jpg", // change based on vite save path
            publisher: {
              "@type": "Organization",
              name: "Visit Ksamil",
            },
            priceRange: "$$",
            areaServed: "Ksamil Albania",
          }),
        }}
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
      content: "https://visitksamil.com/vite-save-path", // or cloudinary
    },
    {
      property: "og:url",
      content: "https://visitksamil.com",
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
      content: "https://visitksamil.com/ksamil-cover.jpg",
    },
    {
      name: "canonical",
      content: "https://visitksamil.com",
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
