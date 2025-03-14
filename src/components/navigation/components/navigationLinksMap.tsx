import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import type { QRL } from "@builder.io/qwik";

export const NavigationLinksMap = component$(
  ({
    pathname,
    handleCloseNavigationMobile,
  }: {
    pathname: string;
    handleCloseNavigationMobile: QRL<() => void>;
  }) => {
    const links = [
      {
        name: "Home",
        href: "#hero",
      },
      {
        name: "About",
        href: "#about",
      },
      {
        name: "What to do",
        href: "#what-to-do",
      },
      {
        name: "Popular Attractions",
        href: "#popular-attractions",
      },
      {
        name: "Interactive Map",
        href: "#interactive-map",
      },
      {
        name: "Transport",
        href: "#transport",
      },
    ];

    const isNotAtRootPage = /what-to-do/g.test(pathname);

    return (
      <nav
        aria-label="Main navigation"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
      >
        <ul role="menubar">
          {links.map((link) => {
            return (
              <li key={link.name} role="none">
                <Link
                  href={`${isNotAtRootPage ? "/" : link.href}`}
                  onClick$={handleCloseNavigationMobile}
                  role="menuitem"
                  itemProp="url"
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  },
);
