import { component$ } from "@builder.io/qwik";

import type { QRL } from "@builder.io/qwik";
import type { Attractions } from "~/types/api";

import { HiArrowTopRightOnSquareOutline } from "@qwikest/icons/heroicons";

export const CardsMap = component$(
  (state: {
    cardChange: QRL<(index: number) => void>;
    cards: Attractions[];
  }) => {
    return (
      <div
        aria-label="Cards map container"
        class="popular-attractions__buttons__cards-wrapper"
      >
        {state.cards.map((card, index) => (
          <div
            aria-label="card"
            class="popular-attractions__buttons__cards-wrapper__card"
            key={card.id}
            onClick$={() => {
              if (index !== 1) state.cardChange(index);
            }}
          >
            <img
              // eslint-disable-next-line qwik/jsx-img
              src="/images/pages/popular-attractions/placeholder.jpg"
              alt="Attraction"
              width={168}
              height={244.7}
            />
            <div
              aria-label="content wrapper"
              class="popular-attractions__buttons__cards-wrapper__card__content"
            >
              <h2>{card.title}</h2>
              <button class="--tex-icon-button --sm">
                View on Map <HiArrowTopRightOnSquareOutline />
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
);
