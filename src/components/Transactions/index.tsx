import { useEffect, useState, useContext } from "react";
import { Transaction, getFilteredTransactions } from "../../ApiClient";
import { WebCardContext } from "../../contexts/WebCardContext";
import getBackGroundColor from "../../utilities";

const Transactions = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const { selectedCard, amountFilter } = useContext(WebCardContext);

    // https://github.com/developerasun/pawcon/issues/48

    useEffect(() => {
        const getCardsFromApi = async () => {
            if (selectedCard) {
                setTransactions(
                    await getFilteredTransactions(selectedCard, amountFilter)
                );
            }
        };
        getCardsFromApi();
    }, [selectedCard, amountFilter]);

    return (
        <>
            {transactions.map((transaction: Transaction) => (
                <>
                    {/* <p>{transaction.id}</p> */}
                    <div
                        className="transaction"
                        style={{
                            backgroundColor: getBackGroundColor(selectedCard),
                        }}
                    >
                        <p className="description">{transaction.description}</p>
                        <p className="amount">{transaction.amount}</p>
                    </div>
                </>
            ))}
        </>
    );
};

export default Transactions;
