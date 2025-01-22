const handleScroll = (navbar?: Element, hero?: HTMLElement) => {
  if (!hero || !navbar) return;

  const heroHeight = hero.offsetHeight;
  if (window.scrollY > heroHeight) {
    navbar.classList.add("--scrolled");
  } else {
    navbar.classList.remove("--scrolled");
  }
};

export const changeNavBarBckgWhileScroll = (cleanup: boolean) => {
  if (cleanup)
    window.removeEventListener(
      "scroll",
      handleScroll.bind(null, undefined, undefined)
    );

  const navbar = document.querySelector(".nav-logo-lang-container")!;
  const hero = document.getElementById("hero")!;

  window.addEventListener("scroll", handleScroll.bind(null, navbar, hero));
};
