import React from "react";
import styles from "../../src/styles/monthlyExpense.module.css";
import Header from "@/components/Header";
import Images from "@/assets/images/images";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import { useRouter } from "next/router";

const Index = () => {
  const navigate = useRouter();

  const goBack = () => {
    navigate.back();
  };

  return (
    <div className={styles.container}>
      <Header
        title="Monthly Expense"
        img={Images.LeftArrow()}
        style={styles.header}
        onClick={() => goBack()}
      />
      <div className={styles.secondaryContainer}>
        <div>
          <h5 className={styles.text}>Amount</h5>
          <TextInput
            style={styles.txtInput}
            img={Images.Dollar()}
            imgStyle={styles.img}
          />
          <Button title="Add Monthly Expense" style={styles.btn} />
        </div>
      </div>
    </div>
  );
};

export default Index;
