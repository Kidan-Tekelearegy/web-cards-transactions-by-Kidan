import { useEffect, useState, useContext } from "react";
import { Card, getCards } from "../../ApiClient";
import { WebCardContext } from "../../contexts/WebCardContext";

import getBackGroundColor from "../../utilities";

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
              backgroundColor: getBackGroundColor(card.id)
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
