import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Footer } from "~/components/footer/footer";
import { Navigation } from "~/components/navigation/navigation";

import "../../public/fonts/island-moments_5.0.20/webfonts/island-moments-latin-400-normal.woff";
import "../../public/fonts/sniglet_5.0.13/webfonts/sniglet-latin-400-normal.woff";
import "../../public/fonts/inter_5.0.18/webfonts/inter-latin-400-normal.woff";
import "../../public/fonts/inter_5.0.18/webfonts/inter-latin-500-normal.woff";
import "../../public/fonts/inter_5.0.18/webfonts/inter-latin-600-normal.woff";
import "../../public/fonts/poppins_5.0.14/webfonts/poppins-latin-400-normal.woff";
import "../../public/fonts/poppins_5.0.14/webfonts/poppins-latin-500-normal.woff";
import "../../public/fonts/poppins_5.0.14/webfonts/poppins-latin-600-normal.woff";
import "../../public/fonts/poppins_5.0.14/webfonts/poppins-latin-700-normal.woff";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
