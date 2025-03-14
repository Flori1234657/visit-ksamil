import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./article.scss?inline";
import type { Articles } from "~/types/api";

export default component$(({ data }: { data: Articles }) => {
  useStyles$(styles);

  // Generate SEO-friendly slug from title
  // const slug = data.title
  //   .toLowerCase()
  //   .replace(/[^\w\s]/gi, "")
  //   .replace(/\s+/g, "-");

  return (
    <article itemScope itemType="https://schema.org/Article">
      <h1 itemProp="headline">{data.title}</h1>
      <img
        src={data.imageUrl}
        alt={`${data.title} in Ksamil, Albania`}
        loading="lazy"
        decoding="async"
        width="800"
        height="600"
        itemProp="image"
      />
      <p dangerouslySetInnerHTML={data.description} itemProp="articleBody"></p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Things to Do in Ksamil",
          description:
            "Discover the best activities and attractions in Ksamil, Albania.",
          url: `https://www.visitksamil.info/what-to-do/${data.id}`, // repleace with slug
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://www.visitksamil.info/what-to-do/${data.id}`,
          },
          image: {
            "@type": "ImageObject",
            url: data.imageUrl,
            width: 800,
            height: 600,
          },
          datePublished: new Date(data.createdAt.seconds).toISOString(),
          author: {
            "@type": "Organization",
            name: "Visit Ksamil",
            url: "https://www.visitksamil.info",
          },
          publisher: {
            "@type": "Organization",
            name: "Visit Ksamil",
            logo: {
              "@type": "ImageObject",
              url: "https://www.visitksamil.info/logo.webp",
              width: 500,
              height: 500,
            },
          },
          about: {
            "@type": "TouristAttraction",
            name: data.title,
            description: data.shortDescription,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ksamil",
              addressRegion: "Vlorë",
              addressCountry: "Albania",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 39.7683,
              longitude: 19.9997,
            },
          },
        })}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.visitksamil.info",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "What to Do",
              item: "https://www.visitksamil.info/what-to-do",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: data.title,
              item: `https://www.visitksamil.info/what-to-do/${data.id}`,
            },
          ],
        })}
      />
    </article>
  );
});
