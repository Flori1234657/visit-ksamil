import { component$ } from "@builder.io/qwik";
import Image from "../../../../public/logo.webp?jsx";
import { useNavigate } from "@builder.io/qwik-city";

export const Logo = component$(() => {
  const navigate = useNavigate();

  return (
    <div class="nav-logo-lang-container__logo" onClick$={() => navigate("/")}>
      <Image
        style={{ width: "2rem", height: "2rem" }}
        alt="VisitKsamil Logo"
        itemProp="logo"
      />
      <h4 itemProp="name">VisitKsamil</h4>
    </div>
  );
});
