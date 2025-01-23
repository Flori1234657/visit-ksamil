import { $, component$, useStore, useStyles$ } from "@builder.io/qwik";
import { Buttons } from "./components/buttons";
import { CardsMap } from "./components/cardsMap";

import styles from "./popular-attractions.scss?inline";
import Blob from "../../../../public/images/svg/popular-attractions-blob.svg?jsx";
import { reorderCards } from "~/helpers/carousel";

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
  });

  const handleReorder = $((index: number) => {
    state.cards = reorderCards(index, state.cards);
  });

  return (
    <section class="popular-attractions" id="popular-attractions">
      <h1>Popular attractions</h1>
      <Blob />
      <Buttons cardChange={handleReorder}>
        <CardsMap cardChange={handleReorder} cards={state.cards} />
      </Buttons>
    </section>
  );
});
