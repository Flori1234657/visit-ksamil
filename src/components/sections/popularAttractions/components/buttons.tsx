import { Slot, component$ } from "@builder.io/qwik";
import type { QRL } from "@builder.io/qwik";

export const Buttons = component$(
  (state: { cardChange: QRL<(index: number) => void> }) => {
    return (
      <div class="popular-attractions__buttons">
        <button
          class="--icon-button --color-secondary"
          onClick$={() => state.cardChange(0)}
        >
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          {/** Left icon */}
        </button>
        <Slot />
        <button
          class="--icon-button --color-secondary"
          onClick$={() => state.cardChange(2)}
        >
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          {/** Right icon */}
        </button>
      </div>
    );
  }
);
