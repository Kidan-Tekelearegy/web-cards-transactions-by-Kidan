// ApiClient/index.ts

export interface Card {
    id: string;
    description: string;
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
    const cards = await (await import("./data/cards.json")).default;

    return cards;
}

export async function getTransactions(cardId: string): Promise<Transaction[]> {
    const transactions: Record<string, Transaction[]> = await (
        await import("./data/transactions.json")
    ).default;

    if (transactions[cardId]) {
        return transactions[cardId];
    }

    throw new Error("cardId not found");
}
export async function getFilteredTransactions(
    cardId: string,
    amount: number
): Promise<Transaction[]> {
    const transactions: Record<string, Transaction[]> = await (
        await import("./data/transactions.json")
    ).default;
    if (transactions[cardId]) {
        if (amount) {
            return transactions[cardId].filter((t) => t.amount >= amount);
        }

        if (transactions[cardId]) {
            return transactions[cardId];
        }
    }

    throw new Error("cardId not found");
}
