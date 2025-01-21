/* eslint-disable qwik/jsx-img */
import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

import Image1 from "/images/pages/hero/image-card-1.jpg";
import Image2 from "/images/pages/hero/image-card-2.jpg";
import Image3 from "/images/pages/hero/image-card-3.jpg";
import Image4 from "/images/pages/hero/image-card-4.jpg";
import Image5 from "/images/pages/hero/image-card-5.jpg";
import Image6 from "/images/pages/hero/image-card-6.jpg";

const IMAGES = [Image1, Image2, Image3, Image4, Image5, Image6];

export const ImagesWrapper = component$(() => {
  const visibleImages = useSignal<string[]>(IMAGES.slice(0, 3)); // Start with the first three images
  const currentIndex = useSignal(0); // Track the current starting index for the visible images

  // Rotate images every 5 seconds
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    const updateImages = () => {
      currentIndex.value = (currentIndex.value + 1) % IMAGES.length;

      // Calculate new visible images
      visibleImages.value = [
        IMAGES[currentIndex.value],
        IMAGES[(currentIndex.value + 1) % IMAGES.length],
        IMAGES[(currentIndex.value + 2) % IMAGES.length],
      ];
    };

    // Update images every 5 seconds
    const intervalId = setInterval(updateImages, 5000);

    // Cleanup interval on component unmount
    cleanup(() => clearInterval(intervalId));
  });

  return (
    <div
      aria-label="Main section images container"
      class="hero-section__images-card"
    >
      {visibleImages.value.map((src, index) => (
        <img
          key={index}
          decoding="async"
          loading="lazy"
          src={src}
          alt={`Random image ${index + 1}`}
        />
      ))}
    </div>
  );
});
