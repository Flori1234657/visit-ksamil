import { Slot, component$ } from "@builder.io/qwik";

export const Buttons = component$(() => {
  return (
    <div>
      <button>iconLeft</button>
      <Slot />
      <button>iconRight</button>
    </div>
  );
});
