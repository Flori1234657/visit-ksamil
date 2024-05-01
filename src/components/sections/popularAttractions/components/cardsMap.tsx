import { component$ } from "@builder.io/qwik";

//import Image from '[IMAGE_PATH]?jsx';

export const CardsMap = component$(() => {
  {
    /** <Image style={{ width: '300px', height: '200px'}}/> */
  }

  const placeholderData = [
    {
      id: "91tya8y8Y&As687a",
      title: "Shkëmbi i keq",
      image: <img src="path" alt="Card image" width={50} height={50} />,
    },
    {
      id: "8j29js8*!982uj&As687a",
      title: "Shkëmbi i keq",
      image: <img src="path" alt="Card image" width={50} height={50} />,
    },
    {
      id: ")90ndnu&^!7hd67t2",
      title: "Shkëmbi i keq",
      image: <img src="path" alt="Card image" width={50} height={50} />,
    },
    {
      id: "!982ns9uxn09aj9s",
      title: "Shkëmbi i keq",
      image: <img src="path" alt="Card image" width={50} height={50} />,
    },
    {
      id: "ansa!yu897wna9",
      title: "Shkëmbi i keq",
      image: <img src="path" alt="Card image" width={50} height={50} />,
    },
  ];

  return (
    <div aria-label="Cards map container">
      {placeholderData.map((card) => (
        <div aria-label="card" key={card.id}>
          {card.image}
          <div aria-label="contant wrapper">
            <h2>{card.title}</h2>
            <button>
              View on Map <span>icon</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
});
