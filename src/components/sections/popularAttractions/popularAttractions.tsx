import { component$, useStyles$ } from "@builder.io/qwik";
import { Buttons } from "./components/buttons";
import { CardsMap } from "./components/cardsMap";

import styles from "./popular-attractions.scss?inline";
import Blob from "../../../../public/images/svg/popular-attractions-blob.svg?jsx";

export const PopularAttractions = component$(() => {
  useStyles$(styles);

  return (
    <section class="popular-attractions" id="popular-attractions">
      <h1>Popular attractions</h1>
      <Blob />
      <Buttons>
        <CardsMap />
      </Buttons>
    </section>
  );
});
