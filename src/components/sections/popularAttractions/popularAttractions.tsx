import { component$ } from "@builder.io/qwik";
import { Buttons } from "./components/buttons";
import { CardsMap } from "./components/cardsMap";

//import Image from '[IMAGE_PATH]?jsx';

export const PopularAttractions = component$(() => {
  return (
    <section>
      <h1>Popular attractions</h1>
      {/** blob <Image style={{ width: '300px', height: '200px'}}/> */}
      <Buttons>
        <CardsMap />
      </Buttons>
    </section>
  );
});
