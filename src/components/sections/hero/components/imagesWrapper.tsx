import { component$ } from "@builder.io/qwik";

export const ImagesWrapper = component$(() => {
  return (
    <div aria-label="Main section images container">
      <div aria-label="image wrapper">IMgWraperleft</div>
      <div aria-label="image wrapper">IMgWraperMiddle</div>
      <div aria-label="image wrapper">IMgWraperRight</div>
    </div>
  );
});
