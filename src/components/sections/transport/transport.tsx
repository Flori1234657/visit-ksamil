import {
  component$,
  useSignal,
  useStyles$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { HoursCards } from "./components/hoursCards";

import styles from "./transport.scss?inline";
import ImageMb from "../../../../public/images/pages/transportation/image-mb.svg?jsx";
import ImagePc from "../../../../public/images/pages/transportation/image-pc.svg?jsx";
import Blob from "../../../../public/images/svg/transportation-blob.svg?jsx";

export const Transport = component$(() => {
  useStyles$(styles);

  const isMobile = useSignal(false);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    isMobile.value = window.innerWidth <= 768;
  });

  return (
    <section class="transportation" id="transport">
      <h1>Transportation</h1>

      {isMobile.value ? <ImageMb /> : <ImagePc />}

      <div aria-label="Information text" class="transportation__info-txt">
        <Blob />
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
