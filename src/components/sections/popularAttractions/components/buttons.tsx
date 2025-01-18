import { Slot, component$ } from "@builder.io/qwik";
import {
  HiChevronRightOutline,
  HiChevronLeftOutline,
} from "@qwikest/icons/heroicons";

export const Buttons = component$(() => {
  return (
    <div class="popular-attractions__buttons">
      <button class="--icon-button --color-secondary">
        <HiChevronLeftOutline />
      </button>
      <Slot />
      <button class="--icon-button --color-secondary">
        <HiChevronRightOutline />
      </button>
    </div>
  );
});
