import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <div>wha to do card</div>;
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
