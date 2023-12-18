import { Transaction, getTransactions } from "../../ApiClient";
import { useEffect, useState } from "react";

const Transactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const getTransactionsFromApi = async () => {
      setTransactions(await getTransactions("lkmfkl-mlfkm-dlkfm"));
    };
    getTransactionsFromApi();
  }, []);

  return (
    <>
      <h1>Transactions</h1>
      {transactions.map((transaction) => {
        <>
          <p>{transaction.description}</p>
          <p>{transaction.amount}</p>
        </>;
      })}
    </>
  );
};

export default Transactions;
