import { component$ } from "@builder.io/qwik";
import { Sections } from "./components/sections";
import { Copyright } from "./components/copyright";

//import Image from '[IMAGE_PATH]?jsx';

export const Footer = component$(() => {
  return (
    <footer>
      {/** wave <Image style={{ width: '300px', height: '200px'}}/> */}
      <Sections />
      <Copyright />
    </footer>
  );
});
