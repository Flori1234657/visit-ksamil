import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./article.scss?inline";
import type { Articles } from "~/types/api";

export default component$(({ data }: { data: Articles }) => {
  useStyles$(styles);

  return (
    <article>
      <h2>{data.title}</h2>
      <img src={data.imageUrl} alt="Example" width={100} height={100} />
      <p>{data.description}</p>

      <script
        type="application/ld+json"
        // @ts-ignore
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                url: `https://visitksamil.com/what-to-do/${data.id}`, // maybe these need to be name instead of id for better seo
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
              url: "https://visitksamil.com",
              logo: "https://yourwebsite.com/images/logo.png", // change based on where vite will save the logo after build
            },
          }),
        }}
      />
    </article>
  );
});
