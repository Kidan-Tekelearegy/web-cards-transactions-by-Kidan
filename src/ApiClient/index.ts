
// ApiClient/index.ts

export interface Card {
  id: string;
  description: string;
  color:string;
  transactions: Transaction[];
}

export interface Transaction {
  id: string;
  description: string;
  amount: number;
}
export interface Props {
  cards: Card[];
}

export async function getCards(): Promise<Card[]> {
  const cardsWithTransactions = await Promise.all(
    (await import("./data/cards.json")).default.map(async (cardData: { id: string; description: string; }) => {
      const transactions = await getTransactions(cardData.id);
      return { ...cardData, transactions, color: "someColor" }; // Add a placeholder color or set it dynamically
    })
  );

  return cardsWithTransactions;
}

export async function getTransactions(cardId: string): Promise<Transaction[]> {
  const transactions: Record<string, Transaction[]> = await (
    await import("./data/transactions.json")
  ).default;

  if (transactions[cardId]) {
    return transactions[cardId];
  }

  throw new Error("cardId not found");
};
export async function getFilteredTransactions(cardId: string, amount: number): Promise<Transaction[]> {
  const transactions: Record<string, Transaction[]> = await (
    await import("./data/transactions.json")
  ).default;

  if (amount) {
    return transactions[cardId].filter((t) => t.amount >= amount)
  }

  if (transactions[cardId]) {
    return transactions[cardId];
  }
  throw new Error("cardId not found");
}

