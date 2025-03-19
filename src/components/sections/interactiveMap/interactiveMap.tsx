import { component$, useStyles$ } from "@builder.io/qwik";

import styles from "./interactive-map.scss?inline";

import ImageIllustration from "../../../../public/images/svg/interactive-map-image-illustration.svg?url";
import MapIllustration from "../../../../public/images/svg/interactive-map-map-illustration.svg?url";

export const InteractiveMap = component$(() => {
  useStyles$(styles);

  return (
    <section
      class="interactive-map"
      id="interactive-map"
      itemScope
      itemProp="hasPart"
      itemType="https://schema.org/Map"
    >
      <img
        src={ImageIllustration}
        alt="Illustration"
        width={100}
        height={100}
        decoding="async"
        loading="lazy"
        itemProp="image"
      />

      <div
        aria-label="content"
        class="interactive-map__content"
        itemProp="mainContent"
      >
        <h2 itemProp="name">Interactive Map</h2>
        <div
          class="interactive-map__content__text-button"
          role="region"
          aria-labelledby="map-description"
        >
          <p itemProp="description">
            Discover Ksamil's Hidden Gems. Use our travel map to locate all
            beaches, and top attractions along the Ksamil coastline .
          </p>
          <button
            class="--tex-icon-button --color-secondary"
            onClick$={() => alert("Map is under development!")}
            aria-label="Open Ksamil interactive map in full screen"
          >
            Enter on the Map
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

      <img
        src={MapIllustration}
        alt="Illustration"
        width={100}
        height={100}
        decoding="async"
        loading="lazy"
        itemProp="image"
      />
    </section>
  );
});
