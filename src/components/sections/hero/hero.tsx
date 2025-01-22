import { component$, useStyles$ } from "@builder.io/qwik";
import { ImagesWrapper } from "./components/imagesWrapper";
import { HiChatBubbleOvalLeftEllipsisOutline } from "@qwikest/icons/heroicons";

import styles from "./hero.scss?inline";

import Wave from "../../../../public/images/svg/home-wave.svg?jsx";

export const Hero = component$(() => {
  useStyles$(styles);

  return (
    <section class="hero-section" id="hero">
      <div
        class="hero-section__text-button-wrapper"
        aria-label="Main section text and button container"
      >
        <h1>
          Uncover the Beauty of <span>Ksamil</span>: Your Essential Guide Starts
          Here
        </h1>
        <p>
          Welcome to VisitKsamil, your gateway to the stunning beaches of this
          hidden gem in Albania. Dive into our interactive map, and plan your
          perfect getaway
        </p>
        <button class="hero-section__text-button-wrapper__cta-button --tex-icon-button">
          Contact Us <HiChatBubbleOvalLeftEllipsisOutline />
        </button>
      </div>
      <ImagesWrapper />

      <Wave />
    </section>
  );
});
