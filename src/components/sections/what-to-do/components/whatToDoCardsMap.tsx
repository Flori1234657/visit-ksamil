import { component$ } from "@builder.io/qwik";
import type { QRL } from "@builder.io/qwik";
import { WhatToDoCard } from "./components/whatToDoCard";
import type { Articles } from "~/types/api";

import Blob from "../../../../../public/images/svg/what-to-do-blob.svg?url";

export const WhatToDoCardsMap = component$(
  (state: {
    cards: Articles[];
    handleChange: QRL<(index: number) => void>;
  }) => {
    return (
      <div aria-label="What to do cards map" class="what-to-do__cards-map">
        <img
          src={Blob}
          alt="Blob illustration"
          width={100}
          height={100}
          decoding="async"
          loading="lazy"
        />

        {state.cards.map((card, index) => (
          <WhatToDoCard
            shortDescription={card.shortDescription}
            id={card.id}
            imagePath={card.imageUrl}
            title={card.title}
            key={card.id}
            show={index === 0}
            index={index}
            changeCard={state.handleChange}
          />
        ))}
      </div>
    );
  },
);
