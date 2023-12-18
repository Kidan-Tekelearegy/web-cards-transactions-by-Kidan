import { useEffect, useState } from "react";
import { Card, getCards } from "../../ApiClient";
const Cards = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const getCardsFromApi = async () => {
      setCards(await getCards());
    };
    getCardsFromApi();
  }, []);

  return (
    <>
      <h1>Cards</h1>
      {cards.map((card) => {
        <div>
          <p>{card.description}</p>
          <p>{card.id}</p>
        </div>;
      })}
    </>
  );
};

export default Cards;
