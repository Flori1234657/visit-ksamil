import { component$, useStyles$ } from "@builder.io/qwik";
import { AboutCards } from "./components/aboutCards";

import styles from "./about.scss?inline";

export const About = component$(() => {
  useStyles$(styles);

  return (
    <section class="about-us">
      <h1>About Ksamil</h1>
      <div aria-label="Cards about Ksamil" class="about-us__about-cards">
        <AboutCards />
      </div>
      <div
        aria-label="About Ksamil last paragraph"
        class="about-us__last-message"
      >
        <h2>You are welcomed!</h2>
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
