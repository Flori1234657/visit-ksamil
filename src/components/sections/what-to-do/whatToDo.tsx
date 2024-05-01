import { component$ } from "@builder.io/qwik";
import { WhatToDoCardsMap } from "./components/whatToDoCardsMap";

//import Image from '[IMAGE_PATH]?jsx';

export const WhatToDo = component$(() => {
  return (
    <section>
      <h1>What to do?</h1>
      {/** blob-shape --> <Image style={{ width: '300px', height: '200px'}}/> */}

      <WhatToDoCardsMap />

      <button>
        <span>icon</span> Next Card
      </button>
    </section>
  );
});
