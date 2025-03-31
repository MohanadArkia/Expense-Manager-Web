import MyContext from "@/store/MyContext";
import React, { useContext, useEffect, useState } from "react";
import { GetAllExpenses, GetAllIncomes } from "./api";
import Transactions from "@/components/Transactions";
import styles from "../styles/transactions.module.css";

const RenderTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const { user } = useContext(MyContext);

  useEffect(() => {
    if (user) {
      getAllTransactionsFromAPI();
    }
  }, [user]);

  const getAllTransactionsFromAPI = async () => {
    try {
      const incomesResponse = await GetAllIncomes();
      const expensesResponse = await GetAllExpenses();

      if (incomesResponse.error === false && expensesResponse.error === false) {
        const incomes = incomesResponse.message.map((transaction) => ({
          ...transaction,
        }));

        const expenses = expensesResponse.message.map((transaction) => ({
          ...transaction,
        }));

        const allTransactions = [...incomes, ...expenses];

        const sortedTransactions = allTransactions.sort(
          (a, b) => new Date(b.date) - new Date(a.date),
        );

        const filteredTransactions = sortedTransactions.filter(
          (filtered) => filtered.userId == user,
        );

        setTransactions(filteredTransactions);
      } else {
        console.error(
          "Error fetching transactions:",
          incomesResponse.message || expensesResponse.message,
        );
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const displayTransactions = () => {
    if (!transactions || transactions.length == 0) {
      return (
        <div className={styles.noTransactions}>
          <h1>There are no transactions yet</h1>
        </div>
      );
    }
    return transactions.map((transaction, index) => (
      <div key={index} className={styles.transactionContainer}>
        <Transactions {...transaction} />
        <hr />
      </div>
    ));
  };

  return { transactions, getAllTransactionsFromAPI, displayTransactions };
};

export default RenderTransactions;
