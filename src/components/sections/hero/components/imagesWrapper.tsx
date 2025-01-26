/* eslint-disable qwik/jsx-img */
import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { imagesData as IMAGES } from "../data/images";

import placeholder from "/images/pages/hero/image-card-1.jpg";

export const ImagesWrapper = component$(() => {
  const visibleImages = useSignal<typeof IMAGES>(IMAGES.slice(0, 3)); // Start with the first three images
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
      {visibleImages.value.map((image, index) => (
        <img
          key={index}
          decoding="async"
          loading="lazy"
          src={placeholder}
          alt={image.alt}
        />
      ))}
    </div>
  );
});
