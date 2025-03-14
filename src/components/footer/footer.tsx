import { component$, useStyles$ } from "@builder.io/qwik";
import { Sections } from "./components/sections";
import { Copyright } from "./components/copyright";

import styles from "./footer.scss?inline";
import Wave from "../../../public/images/svg/footer-wave.svg?url";

export const Footer = component$(() => {
  useStyles$(styles);

  return (
    <footer itemScope itemType="https://schema.org/WPFooter">
      <img
        aria-hidden="true"
        src={Wave}
        alt="Wave illustration"
        width={100}
        height={100}
        decoding="async"
        loading="lazy"
      />
      <Sections />
      <Copyright />
    </footer>
  );
});
