import React from "react";
import styles from "../src/styles/index.module.css";
import Card from "@/components/Card";
import Images from "@/assets/images/images";
import Header from "@/components/Header";
import Image from "next/image";
import BottomNavigator from "@/components/BottomNavigator";

const index = () => {
  return (
    <div className={styles.container}>
      <Header
        title="Overview"
        style={styles.header}
        headerTitleStyle={styles.headerTitle}
      />
      <div className={styles.secondaryContainer}>
        <Card
          img={Images.Wallet()}
          title="Total Salary"
          price={0}
          style={styles.card}
          titleStyle={styles.title}
          textStyle={styles.priceTxt}
          imgStyle={styles.cardImg}
        />
        <Card
          img={Images.Wallet()}
          title="Total Expense"
          price={0}
          style={styles.card}
          titleStyle={styles.title}
          textStyle={styles.priceTxt}
          imgStyle={styles.cardImg}
        />
        <Card
          img={Images.Wallet()}
          title="Monthly Expense"
          price={0}
          style={styles.card}
          titleStyle={styles.title}
          textStyle={styles.priceTxt}
          imgStyle={styles.cardImg}
        />
      </div>

      <div className={styles.thirdContainer}>
        <div className={styles.forthContainer}>
          <h5 className={styles.latestTitle}>Latest Entries</h5>
          <Image
            className={styles.img}
            src={Images.More()}
            alt="Unable to load this image"
          />
        </div>
      </div>
      <BottomNavigator />
    </div>
  );
};

export default index;
