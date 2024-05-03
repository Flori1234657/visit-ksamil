import { component$, useStyles$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { MobileNavigationButton } from "./components/mobileNavigationButton";

import styles from "./navigation.scss?inline";
import { SupportUs } from "./support-section/supportUs";

import Image from "../../../public/logo-placeholder.png?jsx";

export const Navigation = component$(() => {
  useStyles$(styles);

  return (
    <>
      {" "}
      <SupportUs />
      <div
        aria-label="Navigation logo and language container"
        class="nav-logo-lang-container"
      >
        <div class="nav-logo-lang-container__logo">
          <Image style={{ width: "2rem", height: "2rem" }} />
          <h4>VisitKsamil</h4>
        </div>
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
    </>
  );
});
