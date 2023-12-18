import { createContext, useState } from "react";

//https://wanago.io/2020/09/28/react-context-api-hooks-typescript/
export interface WebCardContextData {
  selectedCard: string;
  amountFilter: number;

  updateSelectedCard: (newlySelectedCard: string) => void;
  updateAmountFilter: (newAmountFilter: number) => void;
}

export const webCardContextDataDefaultValue: WebCardContextData = {
  selectedCard: "",
  amountFilter: 0,

  updateSelectedCard: () => {},
  updateAmountFilter: () => {},
};

export const WebCardContext = createContext<WebCardContextData>(
  webCardContextDataDefaultValue
);

const WebCardContextProvider = (props: any) => {
  const [selectedCard, setSelectedCard] = useState<string>("");
  const [amountFilter, setAmountFilter] = useState<number>(0);

  const updateSelectedCard = (newlySelectedCard: string) => {
    setSelectedCard(newlySelectedCard);
  };

  const updateAmountFilter = (newAmountFilter: number) => {
    setAmountFilter(newAmountFilter);
  };

  return (
    <WebCardContext.Provider
      value={{
        selectedCard,
        amountFilter,
        updateSelectedCard,
        updateAmountFilter,
      }}
    >
      {props.children}
    </WebCardContext.Provider>
  );
};

export default WebCardContextProvider;
