import {
  $,
  component$,
  useSignal,
  useStyles$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { MobileNavigationButton } from "./components/mobileNavigationButton";

import styles from "./navigation.scss?inline";
import { SupportUs } from "./support-section/supportUs";

import Image from "../../../public/logo.webp?jsx";
import MobileWave from "../../../public/images/svg/dropdown-menu-wave.svg?jsx";
import { changeNavBarBckgWhileScroll } from "~/helpers/nav-bar";

export const Navigation = component$(() => {
  useStyles$(styles);
  const location = useLocation();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    if (/what-to-do/g.test(location.url.pathname)) return;
    changeNavBarBckgWhileScroll(false);

    return () => changeNavBarBckgWhileScroll(true);
  });

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
        class={`nav-logo-lang-container ${showNavigation.value ? "--show" : "--hide"} ${/what-to-do/g.test(location.url.pathname) ? "--scrolled" : ""}`}
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
