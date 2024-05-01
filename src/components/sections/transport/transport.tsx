import { component$ } from "@builder.io/qwik";
import { HoursCards } from "./components/hoursCards";

//import Image from '[IMAGE_PATH]?jsx';

export const Transport = component$(() => {
  return (
    <section>
      <h1>Transportation</h1>
      {/** card images <Image style={{ width: '300px', height: '200px'}}/> */}

      <div aria-label="Information text">
        {/** card images <Image style={{ width: '300px', height: '200px'}}/> */}
        <p>
          To come in Ksamil from Saranda you can use the bus it costs
          <span>150lek/person,</span> or you can get a taxi. Also you can use
          the same bus to go in Butrint and come from Butrint to Ksamil.
        </p>
      </div>

      <HoursCards />
    </section>
  );
});
