import { component$, useStyles$ } from "@builder.io/qwik";
import { AboutCards } from "./components/aboutCards";

import styles from "./about.scss?inline";

export const About = component$(() => {
  useStyles$(styles);

  return (
    <section
      role="region"
      aria-labelledby="about-heading"
      class="about-us"
      id="about"
      itemScope
      itemProp="hasPart"
      itemType="https://schema.org/ItemList"
    >
      <h2 itemProp="name">Ksamil Albania</h2>
      <div
        aria-label="Key facts about Ksamil Albania beaches and Albanian Riviera tourism"
        class="about-us__about-cards"
        itemProp="itemListElement"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <AboutCards />
      </div>
      <div
        aria-label="Why visit Ksamil Albania"
        class="about-us__last-message"
        itemProp="description"
      >
        <h3>Welcome to Ksamil, Albania!</h3>
        <p itemProp="text">
          Discover Ksamil – a coastal gem renowned for its{" "}
          <strong>pristine Ksamil beaches</strong> and enchanting islands. This
          charming destination offers family-friendly resorts, hidden coves, and
          crystal-clear Ionian Sea waters.
        </p>
      </div>
    </section>
  );
});
