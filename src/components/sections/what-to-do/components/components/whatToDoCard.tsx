import { component$ } from "@builder.io/qwik";

import { HiArrowTopRightOnSquareOutline } from "@qwikest/icons/heroicons";

interface Props {
  id: string;
  imagePath: string;
  title: string;
  description: string;
  show: boolean;
}

export const WhatToDoCard = component$(
  ({ description, id, imagePath, title, show }: Props) => {
    return show ? (
      <div
        aria-label="What to to card"
        class="what-to-do__cards-map__card --visible"
      >
        <img src={imagePath} alt="Randrom" width={50} height={50} />
        <div
          aria-label="Text and button container"
          class="what-to-do__cards-map__card__text-button --visible"
        >
          <div
            aria-label="Text"
            class="what-to-do__cards-map__card__text-button__text-container"
          >
            <h2>{title}</h2>
            <p>{description}</p>
          </div>

          <button
            onClick$={() => console.log(id)}
            class="--tex-icon-button --sm"
          >
            Discover <HiArrowTopRightOnSquareOutline />
          </button>
        </div>
      </div>
    ) : (
      <div class="what-to-do__cards-map__card --hidden">
        <h2>?</h2>
      </div>
    );
  },
);
