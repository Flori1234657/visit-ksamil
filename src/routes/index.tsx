import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { About } from "~/components/sections/about/about";
import { Hero } from "~/components/sections/hero/hero";
import { InteractiveMap } from "~/components/sections/interactiveMap/interactiveMap";
import { PopularAttractions } from "~/components/sections/popularAttractions/popularAttractions";
import { Transport } from "~/components/sections/transport/transport";
import { WhatToDo } from "~/components/sections/what-to-do/whatToDo";

export default component$(() => {
  return (
    <>
      <Hero />
      <About />
      <WhatToDo />
      <PopularAttractions />
      <InteractiveMap />
      <Transport />
    </>
  );
});

export const head: DocumentHead = {
  title: "Visit Ksamil",
  meta: [
    {
      name: "description",
      content: "This is an tourism page for Ksamil/Albania",
    },
  ],
};
