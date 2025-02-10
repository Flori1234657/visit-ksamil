import { component$ } from "@builder.io/qwik";

import type { QRL } from "@builder.io/qwik";
import type { Attractions } from "~/types/api";

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
              src={card.imageUrl}
              alt={card.title}
              title={card.description}
              loading="lazy"
              decoding="async"
              width={168}
              height={244.7}
            />
            <div
              aria-label="content wrapper"
              class="popular-attractions__buttons__cards-wrapper__card__content"
            >
              <h3>{card.title}</h3>
              <button class="--tex-icon-button --sm">
                <a href={card.locationUrl} target="_blank">
                  View on Map
                </a>
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
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                {/** Arrow box icon */}
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
);
