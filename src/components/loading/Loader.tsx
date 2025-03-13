import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./_loaders.scss?inline";

export const Loader = component$(
  ({
    fontSize,
    modifierClass,
  }: {
    fontSize: number;
    modifierClass?: string;
  }) => {
    useStyles$(styles);

    return (
      <div class="container">
        <div
          aria-label="Loading animation"
          class={`container__spinner-loader ${modifierClass}`}
          style={{ fontSize: `${fontSize}rem` }}
        ></div>
      </div>
    );
  },
);
