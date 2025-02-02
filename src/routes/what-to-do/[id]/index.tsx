import { component$, useStyles$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import SidePanel from "../components/sidePanel";

import styles from "./styles.scss?inline";
import Article from "../components/article";

export default component$(() => {
  useStyles$(styles);

  return (
    <div class="what-to-do">
      <Article />
      <SidePanel />
    </div>
  );
});

export const head: DocumentHead = {
  title: "What to do in Ksamil?",
  meta: [
    {
      name: "description",
      content:
        "This page has different articles about what activities to do in Ksamil",
    },
  ],
};
