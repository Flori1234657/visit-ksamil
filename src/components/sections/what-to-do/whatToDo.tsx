import { component$, useStyles$ } from "@builder.io/qwik";
import { WhatToDoCardsMap } from "./components/whatToDoCardsMap";

import { HiArrowLeftOutline } from "@qwikest/icons/heroicons";
import styles from "./what-to-do.scss?inline";

export const WhatToDo = component$(() => {
  useStyles$(styles);

  return (
    <section class="what-to-do">
      <h1>What to do?</h1>

      <WhatToDoCardsMap />

      <button class="--tex-icon-button --color-secondary">
        <HiArrowLeftOutline /> Next Card
      </button>
    </section>
  );
});
