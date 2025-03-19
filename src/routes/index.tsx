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
          name: "Visit Ksamil - Albanian Riviera Travel Guide",
          url: "https://www.visitksamil.info",
          description:
            "Official travel guide to Ksamil, Albania - featuring the best beaches on the Albanian Riviera, top attractions near Saranda, and UNESCO World Heritage sites. Your complete resource for planning an Albania beach holiday.",
          image: [
            "https://res.cloudinary.com/doy1hhgfw/image/upload/v1741708402/ksamil-islands_iuaaxg.jpg",
            "https://res.cloudinary.com/doy1hhgfw/image/upload/v1741708401/ksamil-crystal-clear-water_d5xskg.jpg",
            "https://res.cloudinary.com/doy1hhgfw/image/upload/v1741708401/ksamil-hidden-gem_hvgknk.jpg",
          ],
          about: {
            "@type": "City",
            name: "Ksamil",
            description:
              "Ksamil, Albania - A premier beach destination on the Albanian Riviera, famous for its rocky and white sand beaches, crystal-clear Ionian Sea waters, and proximity to Butrint National Park, a UNESCO World Heritage Site.",
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
        })}
      />
      {/* Separate BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.visitksamil.info",
            },
          ],
        })}
      />
    </>
  );
});

export const head: DocumentHead = {
  title: "Ksamil Albania: Beaches & Albanian Riviera Travel Guide 2025",
  meta: [
    {
      name: "description",
      content:
        "Discover Ksamil's pristine beaches on the Albanian Riviera. Your complete guide to top attractions, best beaches in Albania, and travel tips for your perfect Mediterranean holiday.",
    },
    {
      name: "keywords",
      content:
        "ksamil albania, albanian riviera, best beaches in albania, saranda albania, ksamil beaches, albania beach resorts, things to do in albania, albania travel guide, albania holiday destinations",
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
      content:
        "Ksamil Albania: Beaches & Albanian Riviera Travel Guide | Visit Ksamil",
    },
    {
      property: "og:description",
      content:
        "Plan your perfect beach holiday in Ksamil, Albania. Discover the best beaches on the Albanian Riviera, top attractions, and essential travel tips for 2025.",
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
      content: "Ksamil Albania: Albanian Riviera's Best Beaches & Travel Tips",
    },
    {
      name: "twitter:description",
      content:
        "Your complete guide to Ksamil - Albania's hidden gem with crystal-clear waters, best beaches, and UNESCO World Heritage sites. Plan your 2025 trip now!",
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
