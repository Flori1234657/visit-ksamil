import { component$, useStyles$ } from "@builder.io/qwik";
import { ImagesWrapper } from "./components/imagesWrapper";

import styles from "./hero.scss?inline";

//import Image from '[IMAGE_PATH]?jsx';

export const Hero = component$(() => {
  useStyles$(styles);

  return (
    <section class="hero-section">
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
        <button>
          Contact Us <span>// also icon here</span>
        </button>
      </div>
      <ImagesWrapper />

      {/** also wavw here <Image style={{ width: '300px', height: '200px'}}/> */}
    </section>
  );
});
