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
      <h2 itemProp="name">About Ksamil</h2>
      <div
        aria-label="Essential facts about Ksamil's history and attractions"
        class="about-us__about-cards"
        itemProp="itemListElement"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <AboutCards />
      </div>
      <div
        aria-label="About Ksamil last paragraph"
        class="about-us__last-message"
        itemProp="description"
      >
        <h3>You are welcomed!</h3>
        <p>
          Experience the beauty of Ksamil for yourself and unlock the secrets of
          this coastal gem, where every moment is an adventure waiting to
          unfold. Welcome to Ksamil – where dreams meet reality, and memories
          are made to last a lifetime.
        </p>
      </div>
    </section>
  );
});
