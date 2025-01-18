import { component$, useStyles$ } from "@builder.io/qwik";
import { Sections } from "./components/sections";
import { Copyright } from "./components/copyright";

import styles from "./footer.scss?inline";
import Wave from "../../../public/images/svg/footer-wave.svg?jsx";

export const Footer = component$(() => {
  useStyles$(styles);

  return (
    <footer>
      <Wave />
      <Sections />
      <Copyright />
    </footer>
  );
});
