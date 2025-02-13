import { $, component$, Resource, useStyles$ } from "@builder.io/qwik";
import { WhatToDoCardsMap } from "./components/whatToDoCardsMap";

import type { ArticleStoreDataType } from "./types/cards";

import styles from "./what-to-do.scss?inline";
import { useArticles } from "./hooks/articlesHook";

export const WhatToDo = component$(
  ({ firstArticles }: { firstArticles: ArticleStoreDataType }) => {
    useStyles$(styles);

    const { articlesStore, fetchNextArticles, newArticles } = useArticles({
      firstArticles,
    });

    const handleChangeCard = $((index: number) => {
      if (fetchNextArticles.value === "dont-fetch-again") {
        articlesStore.reorderCards(index);
        return;
      }
      fetchNextArticles.value = { index };
    });

    return (
      <section class="what-to-do" id="what-to-do">
        <h2>What to do?</h2>

        <Resource
          value={newArticles}
          onPending={() => (
            <WhatToDoCardsMap
              cards={articlesStore.data.articles.slice(0, 3)}
              handleChange={handleChangeCard}
            />
          )}
          onResolved={(data) => {
            if (data) articlesStore.setData(data);

            if (
              fetchNextArticles.value &&
              fetchNextArticles.value !== "dont-fetch-again"
            )
              articlesStore.reorderCards(fetchNextArticles.value.index);

            if (data && data.articles.length < 3)
              fetchNextArticles.value = "dont-fetch-again";

            return (
              <WhatToDoCardsMap
                cards={articlesStore.data.articles.slice(0, 3)}
                handleChange={handleChangeCard}
              />
            );
          }}
        />

        <button
          class="--tex-icon-button --color-secondary"
          onClick$={() => handleChangeCard(1)}
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
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          {/** Arrow icon */}
          Next Card
        </button>
      </section>
    );
  }
);
