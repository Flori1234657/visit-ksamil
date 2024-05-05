import { Slot, component$ } from "@builder.io/qwik";

export const Buttons = component$(() => {
  return (
    <div class="popular-attractions__buttons">
      <button>iconLeft</button>
      <Slot />
      <button>iconRight</button>
    </div>
  );
});
