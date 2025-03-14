import {
  $,
  component$,
  useSignal,
  useStyles$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { MobileNavigationButton } from "./components/mobileNavigationButton";
import styles from "./navigation.scss?inline";
import { SupportUs } from "./support-section/supportUs";
import { Logo } from "./components/logo";
import MobileWave from "../../../public/images/svg/dropdown-menu-wave.svg?jsx";

import { useLocation } from "@builder.io/qwik-city";
import { changeNavBarBckgWhileScroll } from "~/helpers/nav-bar";
import { NavigationLinksMap } from "./components/navigationLinksMap";

export const Navigation = component$(() => {
  useStyles$(styles);
  const location = useLocation();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track }) => {
    track(() => location.url.pathname);
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
        <Logo />

        {showNavigation.value && <MobileWave aria-hidden="true" />}

        <NavigationLinksMap
          handleCloseNavigationMobile={handleCloseNavigationMobile}
          pathname={location.url.pathname}
        />
        <select name="Language" aria-label="Language">
          <option value="en">En</option>
        </select>
        <MobileNavigationButton showNavigation={showNavigation} />
      </div>
    </>
  );
});
