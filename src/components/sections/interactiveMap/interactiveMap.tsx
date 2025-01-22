import { component$, useStyles$ } from "@builder.io/qwik";

import styles from "./interactive-map.scss?inline";
import { HiMapOutline } from "@qwikest/icons/heroicons";

import ImageIllustration from "../../../../public/images/svg/interactive-map-image-illustration.svg?jsx";
import MapIllustration from "../../../../public/images/svg/interactive-map-map-illustration.svg?jsx";

export const InteractiveMap = component$(() => {
  useStyles$(styles);

  return (
    <section class="interactive-map" id="interactive-map">
      <ImageIllustration />

      <div aria-label="content" class="interactive-map__content">
        <h1>Interactive Map</h1>
        <div
          aria-label="Text content"
          class="interactive-map__content__text-button"
        >
          <p>
            We have made it easy for you, adding an interactive map where you
            can find different places in Ksamil, also view their images!
          </p>
          <button class="--tex-icon-button --color-secondary">
            Enter on the Map <HiMapOutline />
          </button>
        </div>
      </div>

      <MapIllustration />
    </section>
  );
});
