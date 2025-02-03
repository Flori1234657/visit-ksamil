import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./article.scss?inline";

type Props = {
  title: string;
  description: string;
  imgUrl: string;
};

export default component$(({ title, description, imgUrl }: Props) => {
  useStyles$(styles);

  return (
    <article>
      <h2>{title}</h2>
      <img src={imgUrl} alt="Example" width={100} height={100} />
      <p>{description}</p>
    </article>
  );
});
