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
          name: "Ksamil Albania Travel Guide - Beaches, Islands & Holidays",
          url: "https://www.visitksamil.info",
          description:
            "Official travel guide to Ksamil, Albania - offering comprehensive insights on its pristine beaches, enchanting islands, top attractions, and rich local heritage.",
          image: [
            "https://res.cloudinary.com/doy1hhgfw/image/upload/v1741708402/ksamil-islands_iuaaxg.jpg",
            "https://res.cloudinary.com/doy1hhgfw/image/upload/v1741708401/ksamil-crystal-clear-water_d5xskg.jpg",
            "https://res.cloudinary.com/doy1hhgfw/image/upload/v1741708401/ksamil-hidden-gem_hvgknk.jpg",
          ],
          about: {
            "@type": "City",
            name: "Ksamil",
            description:
              "Ksamil, Albania - Premier beach destination famous for its four small islands, white pebble beaches, and UNESCO World Heritage neighbor Butrint National Park. Top choice for Albania beach holidays on the Ionian Coast.",
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
            containsPlace: [
              { "@type": "Landform", name: "Ksamil Islands" },
              { "@type": "Beach", name: "Ksamil Beach" },
              {
                "@type": "LandmarksOrHistoricalBuildings",
                name: "Butrint National Park",
              },
            ],
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
  title: "Ksamil Albania: Best Beaches, Islands & 2025 Travel Guide",
  meta: [
    {
      name: "description",
      content:
        "Explore Ksamil Albania stunning beaches and crystal-clear waters. Your guide to the Ksamil Islands, and planning your Ksamil holidays. Discover top things to do.",
    },
    {
      name: "keywords",
      content:
        "ksamil, ksamil albania, ksamil beach, ksamil islands, ksamil holidays, things to do in ksamil, albania ksamil, ksamil albania holidays, butrint national park, best beaches in albania, ksamil attractions",
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
        "Ksamil, Albania: Ultimate Guide to Beaches, Islands & Attractions | Visit Ksamil",
    },
    {
      property: "og:description",
      content:
        "Plan your trip to Ksamil, Albania – a hidden coastal treasure offering stunning beaches, charming islands, and rich cultural heritage. Your go-to resource for local tips and travel insights.",
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
      content:
        "Ksamil, Albania: Ultimate Guide to Beaches, Islands & Attractions",
    },
    {
      name: "twitter:description",
      content:
        "Discover Ksamil, Albania – a coastal pearl with pristine beaches and enchanting islands. Get travel tips, top attractions, and local insights for your next getaway.",
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
