import React, { useContext, useEffect, useState } from "react";
import styles from "../../src/styles/index.module.css";
import Card from "@/components/Card";
import Images from "@/assets/images/images";
import Header from "@/components/Header";
import Image from "next/image";
import BottomNavigator from "@/components/BottomNavigator";
import { useRouter } from "next/router";
import MyContext from "@/store/MyContext";
import RenderTransactions from "@/utils/renderTransactions";

const Index = () => {
  const router = useRouter();
  const { totalSalary, setTotalSalary } = useContext(MyContext);
  const { transactions, getAllTransactionsFromAPI, displayTransactions } =
    RenderTransactions();
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    calculateTotalSalary();
    calculateTotalExpense();
    getAllTransactionsFromAPI();
  }, [totalSalary, totalExpense, transactions]);

  const calculateTotalSalary = async () => {
    try {
      const incomeTransactions = transactions;

      const incomes = incomeTransactions.filter(
        (incomes) => incomes.incomeAmount,
      );

      let totalIncome = 0;
      incomes.forEach((income) => {
        totalIncome += income.incomeAmount;
      });

      setTotalSalary(totalIncome - totalExpense);
    } catch (error) {
      console.error("Error calculating total salary:", error);
    }
  };

  const calculateTotalExpense = async () => {
    try {
      const expenseTransactions = transactions;

      const expenses = expenseTransactions.filter(
        (expenses) => expenses.expenseAmount,
      );

      let totalExpense = 0;
      expenses.forEach((expense) => {
        totalExpense += expense.expenseAmount;
      });

      setTotalExpense(totalExpense);
    } catch (error) {
      console.error("Error calculating total salary:", error);
    }
  };

  const navigate = (navigateTo: string) => {
    router.push(navigateTo);
  };

  const logout = () => {
    localStorage.removeItem("LoggedIn");
    localStorage.removeItem("UserId");
    router.replace("login");
  };

  return (
    <div className={styles.container}>
      <Header
        title="Overview"
        style={styles.header}
        headerTitleStyle={styles.headerTitle}
        img={Images.logout()}
        onClick={logout}
      />
      <div className={styles.secondaryContainer}>
        <Card
          img={Images.Wallet()}
          title="Total Salary"
          price={totalSalary || 0}
          style={styles.card}
          titleStyle={styles.title}
          textStyle={styles.priceTxt}
          imgStyle={styles.cardImg}
        />
        <Card
          img={Images.Wallet()}
          title="Total Expense"
          price={totalExpense || 0}
          style={styles.card}
          titleStyle={styles.title}
          textStyle={styles.priceTxt}
          imgStyle={styles.cardImg}
        />
        {/*
        <Card
          img={Images.Wallet()}
          title="Monthly Expense"
          price={0}
          style={styles.card}
          titleStyle={styles.title}
          textStyle={styles.priceTxt}
          imgStyle={styles.cardImg}
          hover={styles.monthlyHover}
          onClick={() => navigate("monthlyExpense")}
        />
        */}
      </div>

      <div className={styles.thirdContainer}>
        <div className={styles.forthContainer}>
          <h5 className={styles.latestTitle}>Latest Entries</h5>
          <Image
            className={styles.img}
            src={Images.More()}
            alt="Unable to load this image"
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
