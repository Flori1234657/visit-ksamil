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
        <h3>You are welcomed in Ksamil!</h3>
        <p itemProp="text">
          Discover the <strong>best beaches in Albania</strong> along the
          <span
            itemProp="containsPlace"
            itemScope
            itemType="https://schema.org/Beach"
          >
            <span itemProp="name"> Albanian Riviera coastline</span>
          </span>
          . Just 14km south of{" "}
          <span itemProp="containedInPlace" itemType="https://schema.org/City">
            Saranda
          </span>
          , Ksamil offers <strong>family-friendly beach resorts</strong> with
          <span itemProp="amenityFeature">
            {" "}
            crystal-clear Ionian Sea waters
          </span>
          .
        </p>
      </div>
    </section>
  );
});
