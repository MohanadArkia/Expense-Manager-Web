import React, { useEffect } from "react";
import styles from "../../src/styles/add.module.css";
import BottomNavigator from "@/components/BottomNavigator";
import Images from "@/assets/images/images";
import Header from "@/components/Header";
import Card from "@/components/Card";
import Image from "next/image";
import { useRouter } from "next/router";
import RenderTransactions from "@/utils/renderTransactions";

const Index = () => {
  const router = useRouter();
  const { transactions, getAllTransactionsFromAPI, displayTransactions } =
    RenderTransactions();

  useEffect(() => {
    getAllTransactionsFromAPI();
  }, [transactions]);

  const navigate = (route: string) => {
    router.push(route);
  };

  return (
    <div className={styles.container}>
      <Header
        img={Images.LeftArrow()}
        title="Add"
        style={styles.header}
        onClick={router.back}
      />
      <div className={styles.addContainer}>
        <Card
          title="Add Income"
          img={Images.Wallet()}
          style={styles.card}
          titleStyle={styles.headerTitle}
          imgStyle={styles.cardImg}
          onClick={() => navigate("addIncome")}
        />
        <Card
          title="Add Expense"
          img={Images.Wallet()}
          style={styles.card}
          titleStyle={styles.headerTitle}
          imgStyle={styles.cardImg}
          onClick={() => navigate("addExpense")}
        />
        {/*
        <Card
          title="Add Reminder"
          img={Images.Reminder()}
          style={styles.card}
          titleStyle={styles.headerTitle}
          imgStyle={styles.cardImg}
          onClick={() => navigate("addReminder")}
        />
        <Card
          title="Add Goal"
          img={Images.goal()}
          style={styles.card}
          titleStyle={styles.headerTitle}
          imgStyle={styles.cardImg}
          onClick={() => navigate("addGoal")}
        />
        */}
      </div>

      <div className={styles.latestEntriesContainer}>
        <div className={styles.titleContainer}>
          <h5 className={styles.title}>Latest Entries</h5>
          <Image
            src={Images.More()}
            alt="Unable to load this image"
            className={styles.img}
            onClick={() => navigate("history")}
          />
        </div>
        {displayTransactions()}
      </div>
      <BottomNavigator />
    </div>
  );
};

export default Index;
