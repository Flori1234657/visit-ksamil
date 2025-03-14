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
      <div
        aria-label="Ksamil activity recommendations carousel"
        class="what-to-do__cards-map"
        role="region"
        aria-roledescription="carousel"
      >
        <img
          src={Blob}
          alt="Decorative pattern background"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: state.cards.map((card, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Article",
                name: card.title,
                url: `https://www.visitksamil.info/what-to-do/${card.id}`,
                image: card.imageUrl,
              },
            })),
          })}
        />
      </div>
    );
  },
);
