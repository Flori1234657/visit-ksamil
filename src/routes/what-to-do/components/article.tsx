import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./article.scss?inline";
import type { Articles } from "~/types/api";

export default component$(({ data }: { data: Articles }) => {
  useStyles$(styles);

  return (
    <article>
      <h2>{data.title}</h2>
      <img
        src={data.imageUrl}
        alt={data.title}
        loading="lazy"
        decoding="async"
        width={100}
        height={100}
      />
      <p dangerouslySetInnerHTML={data.description}></p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Things to Do in Ksamil",
          description:
            "Discover the best activities and attractions in Ksamil, Albania.",
          itemListElement: [
            {
              "@type": "TouristAttraction",
              name: data.title,
              description: data.shortDescription,
              url: `https://www.visitksamil.info/what-to-do/${data.id}`, // maybe these need to be name instead of id for better seo
              image: data.imageUrl,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ksamil",
                addressCountry: "Albania",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 39.7683,
                longitude: 19.9997,
              },
            },
          ],
          publisher: {
            "@type": "Organization",
            name: "Visit Ksamil",
            url: "https://www.visitksamil.info",
            logo: "https://www.visitksamil.info/logo.webp",
          },
        })}
      />
    </article>
  );
});
