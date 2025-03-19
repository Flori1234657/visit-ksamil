import { component$, useStyles$ } from "@builder.io/qwik";
import { ImagesWrapper } from "./components/imagesWrapper";

import styles from "./hero.scss?inline";

import Wave from "../../../../public/images/svg/home-wave.svg?jsx";

export const Hero = component$(() => {
  useStyles$(styles);

  return (
    <section
      class="hero-section"
      id="hero"
      role="banner"
      itemScope
      itemType="https://schema.org/WebPage"
      itemProp="mainContentOfPage"
    >
      <div
        class="hero-section__text-button-wrapper"
        aria-label="VisitKsamil introduction and contact button"
      >
        <h1 itemProp="headline">
          Discover Ksamil: <span>Albanian Riviera's</span> with Crystal-Clear
          Waters
        </h1>
        <p itemProp="description">
          Your complete guide to Albania's best beaches near Saranda. Explore
          UNESCO-listed Butrint National Park, pristine Ionian Sea coves, and
          the stunning Albanian coastline.
        </p>
        <a
          href="tel:+355688393968"
          aria-label="Contact Ksamil information service"
        >
          <button class="hero-section__text-button-wrapper__cta-button --tex-icon-button">
            Contact Us{" "}
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
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            {/** Message circle icon */}
          </button>
        </a>
      </div>
      <ImagesWrapper />

      <Wave aria-hidden="true" />
    </section>
  );
});
