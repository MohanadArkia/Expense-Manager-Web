import React from "react";
import styles from "../../src/styles/add.module.css";
import BottomNavigator from "@/components/BottomNavigator";
import Images from "@/assets/images/images";
import Header from "@/components/Header";
import Card from "@/components/Card";
import Image from "next/image";

const index = () => {
  return (
    <div className={styles.container}>
      <Header img={Images.LeftArrow()} title="Add" style={styles.header} />
      <div className={styles.addContainer}>
        <Card
          title="Add Income"
          img={Images.Wallet()}
          style={styles.card}
          titleStyle={styles.headerTitle}
          imgStyle={styles.cardImg}
          onClick={() => console.log("Go To Income Screen")}
        />
        <Card
          title="Add Expense"
          img={Images.Wallet()}
          style={styles.card}
          titleStyle={styles.headerTitle}
          imgStyle={styles.cardImg}
          onClick={() => console.log("Go To Expense Screen")}
        />
        <Card
          title="Add Reminder"
          img={Images.Reminder()}
          style={styles.card}
          titleStyle={styles.headerTitle}
          imgStyle={styles.cardImg}
          onClick={() => console.log("Go To Reminder Screen")}
        />
        <Card
          title="Add Goal"
          img={Images.goal()}
          style={styles.card}
          titleStyle={styles.headerTitle}
          imgStyle={styles.cardImg}
          onClick={() => console.log("Go To Goal Screen")}
        />
      </div>

      <div className={styles.latestEntriesContainer}>
        <div className={styles.titleContainer}>
            <h5 className={styles.title}>Latest Entries</h5>
            <Image src={Images.More()} alt="Unable to load this image" className={styles.img} />
        </div>
      </div>

      <BottomNavigator />
    </div>
  );
};

export default index;
