import { $, component$, useStore, useStyles$ } from "@builder.io/qwik";
import { WhatToDoCardsMap } from "./components/whatToDoCardsMap";

import type { QRL } from "@builder.io/qwik";
import type { Card } from "./types/cards";

import { HiArrowLeftOutline } from "@qwikest/icons/heroicons";
import styles from "./what-to-do.scss?inline";
import { reorderCards as reorderCardsHelper } from "~/helpers/carousel";

type WhatToDoStore = {
  cards: Card[];
  reorderCards: QRL<(this: WhatToDoStore) => void>;
};

export const WhatToDo = component$(() => {
  useStyles$(styles);

  const placeholderData = useStore({
    cards: [
      {
        id: "1Afc243!!2233",
        image: "/images/pages/what-to-do/placeholder.jpg",
        title: "Camping at night",
        description:
          "Lorem ipsum dolor sit amet consectetur dolor sitamet conseturasgeter d",
      },
      {
        id: "1Afc2zxt!!2233",
        image: "/images/pages/what-to-do/placeholder.jpg",
        title: "Trip to the Island",
        description:
          "Lorem ipsum dolor sit amet consectetur dolor sitamet conseturasgeter d",
      },
      {
        id: "1Afc243!!22sopa[3",
        image: "/images/pages/what-to-do/placeholder.jpg",
        title: "Jetsi water sport",
        description:
          "Lorem ipsum dolor sit amet consectetur dolor sitamet conseturasgeter d",
      },
      {
        id: "1Afc243|[s]a2233",
        image: "/images/pages/what-to-do/placeholder.jpg",
        title: "Fishing by boat",
        description:
          "Lorem ipsum dolor sit amet consectetur dolor sitamet conseturasgeter d",
      },
    ],
    reorderCards: $(function (this: WhatToDoStore, index: number) {
      this.cards = reorderCardsHelper(index, this.cards, true);
    }),
  });

  return (
    <section class="what-to-do" id="what-to-do">
      <h1>What to do?</h1>

      <WhatToDoCardsMap
        cards={placeholderData.cards.slice(0, 3)}
        handleChange={$((index) => placeholderData.reorderCards(index))}
      />

      <button
        class="--tex-icon-button --color-secondary"
        onClick$={() => placeholderData.reorderCards(1)}
      >
        <HiArrowLeftOutline /> Next Card
      </button>
    </section>
  );
});
