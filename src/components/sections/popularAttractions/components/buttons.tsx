import { Slot, component$ } from "@builder.io/qwik";
import type { QRL } from "@builder.io/qwik";
import {
  HiChevronRightOutline,
  HiChevronLeftOutline,
} from "@qwikest/icons/heroicons";

export const Buttons = component$(
  (state: { cardChange: QRL<(index: number) => Promise<void>> }) => {
    return (
      <div class="popular-attractions__buttons">
        <button
          class="--icon-button --color-secondary"
          onClick$={() => state.cardChange(0)}
        >
          <HiChevronLeftOutline />
        </button>
        <Slot />
        <button
          class="--icon-button --color-secondary"
          onClick$={() => state.cardChange(2)}
        >
          <HiChevronRightOutline />
        </button>
      </div>
    );
  }
);
