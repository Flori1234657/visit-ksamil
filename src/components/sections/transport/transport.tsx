import { component$, useStyles$ } from "@builder.io/qwik";
import { HoursCards } from "./components/hoursCards";

import styles from "./transport.scss?inline";
import ImageMb from "../../../../public/images/pages/transportation/image-mb.svg?jsx";
// import ImagePc from "../../../../public/images/pages/transportation/image-pc.svg?jsx"
import Blob from "../../../../public/images/svg/transportation-blob.svg?jsx";

export const Transport = component$(() => {
  useStyles$(styles);

  return (
    <section class="transportation">
      <h1>Transportation</h1>

      <ImageMb />

      <div aria-label="Information text" class="transportation__info-txt">
        <Blob />
        <p>
          To come in Ksamil from Saranda you can use the bus it costs
          <span> 150lek/person,</span>or you can get a taxi. Also you can use
          the same bus to go in Butrint and come from Butrint to Ksamil.
        </p>
      </div>

      <HoursCards />
    </section>
  );
});
