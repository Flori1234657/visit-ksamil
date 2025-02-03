import { component$, useStyles$ } from "@builder.io/qwik";
import { AboutCards } from "./components/aboutCards";

import styles from "./about.scss?inline";

export const About = component$(() => {
  useStyles$(styles);

  return (
    <section class="about-us" id="about">
      <h2>About Ksamil</h2>
      <div aria-label="Cards about Ksamil" class="about-us__about-cards">
        <AboutCards />
      </div>
      <div
        aria-label="About Ksamil last paragraph"
        class="about-us__last-message"
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
