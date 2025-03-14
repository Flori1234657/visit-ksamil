/* eslint-disable qwik/jsx-img */
import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { imagesData as IMAGES } from "../data/images";

export const ImagesWrapper = component$(() => {
  const visibleImages = useSignal<typeof IMAGES>(IMAGES.slice(0, 3)); // Start with the first three images
  const currentIndex = useSignal(0); // Track the current starting index for the visible images
  const animate = useSignal(false);

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

      animate.value = true;
      setTimeout(() => {
        animate.value = false;
      }, 600);
    };

    // Update images every 5 seconds
    const intervalId = setInterval(updateImages, 5000);

    // Cleanup interval on component unmount
    cleanup(() => clearInterval(intervalId));
  });

  return (
    <div
      aria-label="Ksamil attractions gallery"
      class={`hero-section__images-card${!animate.value ? " --box-shadow" : ""}`}
      itemScope
      itemType="https://schema.org/ImageGallery"
    >
      {visibleImages.value.map((image, index) => (
        <img
          key={index}
          decoding="async"
          loading="lazy"
          src={`/images/pages/hero/carousel/${image.url}.webp`}
          alt={`${image.alt} in Ksamil, Albania`}
          title={image.title}
          class={animate.value ? "animate" : ""}
        />
      ))}
    </div>
  );
});
