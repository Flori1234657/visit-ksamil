import { component$, useStyles$ } from "@builder.io/qwik";

import styles from "./interactive-map.scss?inline";

import ImageIllustration from "../../../../public/images/svg/interactive-map-image-illustration.svg?jsx";
import MapIllustration from "../../../../public/images/svg/interactive-map-map-illustration.svg?jsx";

export const InteractiveMap = component$(() => {
  useStyles$(styles);

  return (
    <section class="interactive-map" id="interactive-map">
      <ImageIllustration />

      <div aria-label="content" class="interactive-map__content">
        <h2>Interactive Map</h2>
        <div
          aria-label="Text content"
          class="interactive-map__content__text-button"
        >
          <p>
            We have made it easy for you, adding an interactive map where you
            can find different places in Ksamil, also view their images!
          </p>
          <button
            class="--tex-icon-button --color-secondary"
            onClick$={() => alert("Map is under development!")}
          >
            Enter on the Map{" "}
            <svg
              aria-hidden="true"
              fill="none"
              height="1em"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            {/** Map icon */}
          </button>
        </div>
      </div>

      <MapIllustration />
    </section>
  );
});
