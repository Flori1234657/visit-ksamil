import { $, component$, useSignal, useStyles$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { MobileNavigationButton } from "./components/mobileNavigationButton";

import styles from "./navigation.scss?inline";
import { SupportUs } from "./support-section/supportUs";

import Image from "../../../public/logo-placeholder.png?jsx";
import MobileWave from "../../../public/images/svg/dropdown-menu-wave.svg?jsx";

export const Navigation = component$(() => {
  useStyles$(styles);

  const showNavigation = useSignal(false);

  const handleCloseNavigationMobile = $(() => {
    if (showNavigation.value) showNavigation.value = false;
  });

  return (
    <>
      {" "}
      <SupportUs />
      <div
        aria-label="Navigation logo and language container"
        class={`nav-logo-lang-container ${showNavigation.value ? "--show" : "--hide"}`}
      >
        <div class="nav-logo-lang-container__logo">
          <Image style={{ width: "2rem", height: "2rem" }} />
          <h4>VisitKsamil</h4>
        </div>

        {showNavigation.value && <MobileWave />}

        <nav>
          <ul>
            <li>
              <Link href="#hero" onClick$={handleCloseNavigationMobile}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" onClick$={handleCloseNavigationMobile}>
                About
              </Link>
            </li>
            <li>
              <Link href="#what-to-do" onClick$={handleCloseNavigationMobile}>
                What to do
              </Link>
            </li>
            <li>
              <Link
                href="#popular-attractions"
                onClick$={handleCloseNavigationMobile}
              >
                Popular Attractions
              </Link>
            </li>
            <li>
              <Link
                href="#interactive-map"
                onClick$={handleCloseNavigationMobile}
              >
                Interactive Map
              </Link>
            </li>
            <li>
              <Link href="#transport" onClick$={handleCloseNavigationMobile}>
                Transport
              </Link>
            </li>
          </ul>
        </nav>
        <select name="Language">
          <option value="en">En</option>
        </select>
        <MobileNavigationButton showNavigation={showNavigation} />
      </div>
    </>
  );
});
