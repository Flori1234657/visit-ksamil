import { component$, useStyles$ } from "@builder.io/qwik";
import PlaceholderImage from "../../../../public/images/pages/hero/background-banner-pc-2.webp";

import styles from "./article.scss?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <article>
      <h2>Camping at night</h2>
      <img src={PlaceholderImage} alt="Example" width={100} height={100} />
      <p>
        Lorem ipsum dolor sit amet consectetur. Massa luctus placerat mauris ut
        dictum ac euismod sed bibendum. Vel auctor lacus tincidunt condimentum
        amet. Convallis tellus sit pharetra eget nisi. Dolor facilisis ut sit
        consectetu. placerat enim ultrices. In turpis ullamcorper gravida
        quisque. Accumsan eget turpis libero tempor risus consectetur eget.
        Velit praesent donec in at aliquet fringilla porttitor.
      </p>
    </article>
  );
});
