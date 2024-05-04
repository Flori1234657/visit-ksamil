import { component$, useStyles$ } from "@builder.io/qwik";
import { WhatToDoCardsMap } from "./components/whatToDoCardsMap";

import styles from "./what-to-do.scss?inline";
//import Image from '[IMAGE_PATH]?jsx';

export const WhatToDo = component$(() => {
  useStyles$(styles);

  return (
    <section class="what-to-do">
      <h1>What to do?</h1>
      {/** blob-shape --> <Image style={{ width: '300px', height: '200px'}}/> */}

      <WhatToDoCardsMap />

      <button>
        <span>icon</span> Next Card
      </button>
    </section>
  );
});
