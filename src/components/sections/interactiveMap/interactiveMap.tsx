import { component$ } from "@builder.io/qwik";

//import Image from '[IMAGE_PATH]?jsx';

export const InteractiveMap = component$(() => {
  return (
    <section>
      {/** svg <Image style={{ width: '300px', height: '200px'}}/> */}

      <div aria-label="content">
        <h1>Interactive Map</h1>
        <div aria-label="Text content">
          <p>
            We have made it easy for you, adding an interactive map where you
            can find different places in Ksamil, also view their images!
          </p>
          <button>Enter on the Map</button>
        </div>
      </div>

      {/** svg <Image style={{ width: '300px', height: '200px'}}/> */}
    </section>
  );
});
