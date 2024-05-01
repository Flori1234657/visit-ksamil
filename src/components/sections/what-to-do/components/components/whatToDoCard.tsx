import { type JSXOutput, component$ } from "@builder.io/qwik";

interface Props {
  id: string;
  image: JSXOutput;
  title: string;
  description: string;
}

export const WhatToDoCard = component$(
  ({ description, id, image, title }: Props) => {
    return (
      <div aria-label="What to to card">
        {image}
        <div aria-label="Text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <button onClick$={() => console.log(id)}>
          Discover <span>icon</span>
        </button>
      </div>
    );
  },
);
