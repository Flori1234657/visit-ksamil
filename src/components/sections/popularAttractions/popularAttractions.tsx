import { $, component$, useStore, useStyles$ } from "@builder.io/qwik";
import { Buttons } from "./components/buttons";
import { CardsMap } from "./components/cardsMap";

import type { QRL } from "@builder.io/qwik";
import type { Card } from "./types/card";

import styles from "./popular-attractions.scss?inline";
import Blob from "../../../../public/images/svg/popular-attractions-blob.svg?jsx";
import { reorderCards as reorderCardsHelper } from "~/helpers/carousel";

type PopularAttractionsStore = {
  cards: Card[];
  reorderCards: QRL<(this: PopularAttractionsStore) => void>;
};

export const PopularAttractions = component$(() => {
  useStyles$(styles);

  //use a contextor something like this to store this tate
  const state = useStore({
    cards: [
      {
        id: "91tya8y8Y&As687a",
        title: "Buka e Vivarit",
        image: "/images/pages/popular-attractions/buka-e-vivarit.jpg",
      },
      {
        id: "8j29js8*!982uj&As687a",
        title: "Shkëmbi i keq",
        image: "/images/pages/popular-attractions/shkembi-i-keq.jpg",
      },
      {
        id: ")90ndnu&^!7hd67t2",
        title: "Pema e Thate",
        image: "/images/pages/popular-attractions/pema-e-thate.jpg",
      },
      // Add more cards as needed
    ],
    reorderCards: $(function (this: PopularAttractionsStore, index: number) {
      this.cards = reorderCardsHelper(index, this.cards);
    }),
  });

  return (
    <section class="popular-attractions" id="popular-attractions">
      <h1>Popular attractions</h1>
      <Blob />
      <Buttons cardChange={$((index) => state.reorderCards(index))}>
        <CardsMap
          cardChange={$((index) => state.reorderCards(index))}
          cards={state.cards}
        />
      </Buttons>
    </section>
  );
});
