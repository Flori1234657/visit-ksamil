import { component$ } from "@builder.io/qwik";
import type { QRL } from "@builder.io/qwik";
import { WhatToDoCard } from "./components/whatToDoCard";
import type { Card } from "../types/cards";

import Blob from "../../../../../public/images/svg/what-to-do-blob.svg?jsx";

export const WhatToDoCardsMap = component$(
  (state: {
    cards: Card[];
    handleChange: QRL<(index: number) => Promise<void>>;
  }) => {
    return (
      <div aria-label="What to do cards map" class="what-to-do__cards-map">
        <Blob />

        {state.cards.map((card, index) => (
          <WhatToDoCard
            description={card.description}
            id={card.id}
            imagePath={card.image}
            title={card.title}
            key={card.id}
            show={index === 0}
            index={index}
            changeCard={state.handleChange}
          />
        ))}
      </div>
    );
  }
);
