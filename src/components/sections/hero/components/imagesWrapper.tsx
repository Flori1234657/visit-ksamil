/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";

import Image1 from "/images/pages/hero/image-card(1).jpg";
import Image2 from "/images/pages/hero/image-card(2).jpg";
import Image3 from "/images/pages/hero/image-card(3).jpg";

export const ImagesWrapper = component$(() => {
  return (
    <div
      aria-label="Main section images container"
      class="hero-section__images-card"
    >
      <img decoding="async" loading="lazy" src={Image1} alt="randrom" />
      <img decoding="async" loading="lazy" src={Image2} alt="randrom" />
      <img decoding="async" loading="lazy" src={Image3} alt="randrom" />
    </div>
  );
});
