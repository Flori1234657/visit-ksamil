import { component$ } from "@builder.io/qwik";
import type { QRL } from "@builder.io/qwik";

import { HiArrowTopRightOnSquareOutline } from "@qwikest/icons/heroicons";

import placeholderImage from "/images/pages/what-to-do/placeholder.jpg";

interface Props {
  id: string;
  imagePath: string;
  title: string;
  shortDescription: string;
  show: boolean;
  changeCard: QRL<(index: number) => void>;
  index: number;
}

export const WhatToDoCard = component$(
  ({
    shortDescription,
    id,
    // imagePath,
    title,
    show,
    changeCard,
    index,
  }: Props) => {
    return show ? (
      <div
        key={`what-to-do-card-div${id}`}
        aria-label="What to to card"
        class="what-to-do__cards-map__card --visible"
      >
        <img
          src={placeholderImage} // for the moment then use cloudinary
          alt="Randrom"
          width={50}
          height={50}
        />
        <div
          aria-label="Text and button container"
          class="what-to-do__cards-map__card__text-button --visible"
        >
          <div
            aria-label="Text"
            class="what-to-do__cards-map__card__text-button__text-container"
          >
            <h2>{title}</h2>
            <p>{shortDescription}</p>
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
      <div
        class="what-to-do__cards-map__card --hidden"
        onClick$={() => changeCard(index)}
      >
        <h2>?</h2>
      </div>
    );
  }
);
