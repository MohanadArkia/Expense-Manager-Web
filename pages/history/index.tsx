import React, { useEffect, useState } from "react";
import styles from "../../src/styles/history.module.css";
import Header from "@/components/Header";
import Images from "@/assets/images/images";
import { useRouter } from "next/router";
import SearchBar from "@/components/SearchBar";
import RenderTransactions from "@/utils/renderTransactions";
import Transactions from "@/components/Transactions";

const Index = () => {
  const router = useRouter();
  const { transactions, getAllTransactionsFromAPI, displayTransactions } =
    RenderTransactions();
  const [filteredData, setFilteredData] = useState(transactions);

  useEffect(() => {
    displayTransactions();
    setFilteredData(transactions);
  }, [transactions]);

  const goBack = () => {
    router.back();
  };

  const search = (searchText, searchProperties) => {
    try {
      if (searchText.trim() === "") {
        setFilteredData(transactions);
      } else {
        const filtered = transactions.filter((element) => {
          return searchProperties.some((property) => {
            const propertyValue = element[property]
              ? element[property].toString().toLowerCase()
              : "";
            const searchTerm = searchText.toLowerCase();
            return propertyValue.includes(searchTerm);
          });
        });
        setFilteredData(filtered);
      }
    } catch (error) {
      console.error("Error in search function:", error);
    }
  };

  const displayFilteredTransactions = () => {
    return filteredData.map((element, index) => (
      <div key={index} className={styles.elementsContainer}>
        <Transactions {...element} />
        <div className={styles.separator} />
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <Header
        title="History"
        img={Images.LeftArrow()}
        style={styles.header}
        onClick={() => goBack()}
      />
      <div className={styles.searchContainer}>
        <SearchBar
          onSearch={search}
          searchProperties={["incomeTitle", "expenseTitle"]}
        />
      </div>

      <div className={styles.transactionContainer}>
        <h3 className={styles.txt}>History</h3>
        {displayFilteredTransactions()}
      </div>
    </div>
  );
};

export default Index;
