import {
  component$,
  useSignal,
  useStyles$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { HoursCards } from "./components/hoursCards";

import styles from "./transport.scss?inline";
import ImageMb from "../../../../public/images/pages/transportation/image-mb.svg?url";
import ImagePc from "../../../../public/images/pages/transportation/image-pc.svg?url";
import Blob from "../../../../public/images/svg/transportation-blob.svg?url";

export const Transport = component$(() => {
  useStyles$(styles);

  const isMobile = useSignal(false);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    isMobile.value = window.innerWidth <= 768;
  });

  return (
    <section
      class="transportation"
      id="transport"
      itemScope
      itemProp="hasPart"
      itemType="https://schema.org/ItemList"
    >
      <h2 itemProp="name">Transportation</h2>

      <img
        src={isMobile.value ? ImageMb : ImagePc}
        alt="Transportation routes between Ksamil, Saranda, and Butrint"
        width={100}
        height={100}
        decoding="async"
        loading="lazy"
        itemProp="image"
      />

      <div
        aria-label="Information text"
        class="transportation__info-txt"
        itemProp="description"
      >
        <img
          src={Blob}
          alt="Decorative background element"
          role="presentation"
          width={100}
          height={100}
          decoding="async"
          loading="lazy"
        />
        <p>
          To come in Ksamil from Saranda you can use the bus it costs &nbsp;
          <span> 150lek/person,</span>&nbsp; or you can get a taxi. Also you can
          use the same bus to go in Butrint and come from Butrint to Ksamil.
        </p>
      </div>

      <HoursCards />
    </section>
  );
});
