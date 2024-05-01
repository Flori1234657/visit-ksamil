import { component$ } from "@builder.io/qwik";

export const Sections = component$(() => {
  return (
    <div aria-label="Footer sections">
      <div aria-label="Website info">
        {/** <Image style={{ width: '300px', height: '200px'}}/> */}
        <h1>VisitKsamil</h1>
        <p>
          This is a website run by a resident of Ksamil. Its focus is to give
          you the information you need about Ksamil before planning a trip here.
          We plan to add more useful things and information’s to this website.{" "}
        </p>
      </div>
      <div aria-label="Newsletter">
        <h1>Newsletter</h1>
        <p>Get the latest from this website by email!</p>
        <div aria-label="actions">
          <input type="email" placeholder="example@mail.domain" />
          <button>
            Subscribe <span>icon</span>
          </button>
        </div>
      </div>
      <div aria-label="Travel stories">
        <h1>Travel stories</h1>
        <p>
          We are collecting travel stories from Ksamil to add them to our
          website!
        </p>
        <button>
          Leave My Story <span>icon</span>
        </button>
      </div>
      <div aria-label="Contact">
        <h1>Contact</h1>
        <ul>
          <li>
            <span>icon</span> +355 68 839 3968
          </li>
          <li>
            <span>icon</span> Ksamil
          </li>
          <li>
            <span>icon</span> floriandollani15@gmailcom
          </li>
        </ul>
      </div>
    </div>
  );
});
