import { useEffect, useState, useContext } from "react";
import { Card, getCards } from "../../ApiClient";
import { WebCardContext } from "../../context/context";

const Cards = () => {
    const [cards, setCards] = useState<Card[]>([]);
    const { updateSelectedCard, selectedCard } = useContext(WebCardContext);
  
    useEffect(() => {
      const getCardsFromApi = async () => {
        setCards(await getCards());
      };
      getCardsFromApi();
    }, []);
  
    return (
      <>
        {cards.map((card: Card) => (
          <button
            key={card.id}
            style={{
              backgroundColor:
                card.id === "elek-n3lk-4m3lk4" ? "lightBlue" : "lightgray",
            }}
            className="card-btn"
            onClick={() => updateSelectedCard(card.id)}
          >
            <div>
              <div>{card.description}</div>
              <div>({card.id})</div>
            </div>
          </button>
        ))}
      </>
    );
  };
  
export default Cards;
