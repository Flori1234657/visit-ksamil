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
        class="popular-attractions__buttons__cards-wrapper"
        role="region"
        aria-roledescription="carousel"
        aria-label="Ksamil's top attractions carousel"
      >
        {state.cards.map((card, index) => (
          <div
            role="group"
            aria-roledescription="slide"
            aria-label={
              index === 1
                ? `${card.title} - Current attraction`
                : "Hidden attraction card"
            }
            itemScope
            itemProp="itemListElement"
            itemType="https://schema.org/ListItem"
            class="popular-attractions__buttons__cards-wrapper__card"
            key={card.id}
            onClick$={() => {
              if (index !== 1) state.cardChange(index);
            }}
          >
            <img
              src={card.imageUrl}
              alt={`View of ${card.title} in Ksamil, Albania`}
              itemProp="image"
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
              <h3 itemProp="name">{card.title}</h3>
              <button itemProp="description" class="--tex-icon-button --sm">
                <a
                  href={card.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  itemProp="hasMap"
                  aria-label={`Open ${card.title} location in Google Maps`}
                >
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
            {/* <meta itemProp="geo" content={`${card.coordinates.lat};${card.coordinates.lng}`} />
        <meta itemProp="address" content="Ksamil, Albania" /> */}
            <meta itemProp="position" content={`${index + 1}`} />

            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ItemList",
                itemListElement: state.cards.map((card, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  item: {
                    "@type": "TouristAttraction",
                    name: card.title,
                    url: `https://www.visitksamil.info/attractions/${card.id}`,
                    image: card.imageUrl,
                    // "geo": {
                    //   "@type": "GeoCoordinates",
                    //   "latitude": card.coordinates.lat,
                    //   "longitude": card.coordinates.lng
                    // }
                  },
                })),
              })}
            />
          </div>
        ))}
      </div>
    );
  },
);
