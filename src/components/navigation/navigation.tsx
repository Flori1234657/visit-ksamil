import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { MobileNavigationButton } from "./components/mobileNavigationButton";

//import Image from '[IMAGE_PATH]?jsx';

export const Navigation = component$(() => {
  return (
    <div aria-label="Navigation logo and language container">
      {/** <Image style={{ width: '300px', height: '200px'}}/> */}
      <nav>
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>What to do</Link>
          </li>
          <li>
            <Link>Popular Attractions</Link>
          </li>
          <li>
            <Link>Interactive Map</Link>
          </li>
          <li>
            <Link>Transport</Link>
          </li>
        </ul>
      </nav>
      <select name="Language">
        <option value="al">Al</option>
        <option value="en">En</option>
        <option value="it">It</option>
        <option value="tr">Tr</option>
      </select>
      <MobileNavigationButton />
    </div>
  );
});
