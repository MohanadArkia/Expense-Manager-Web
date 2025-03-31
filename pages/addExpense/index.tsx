import React, { useContext, useEffect, useState } from "react";
import styles from "../../src/styles/addExpense.module.css";
import Header from "@/components/Header";
import Images from "@/assets/images/images";
import { useRouter } from "next/router";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import { CreateAddExpense } from "@/utils/api";
import MyContext from "@/store/MyContext";
import PopUp from "@/components/PopUp";

const Index = () => {
  const router = useRouter();
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const { user } = useContext(MyContext);
  const [popUpExpense, setPopUpExpense] = useState(false);
  const [successOpenPopUp, setSuccessOpenPopUp] = useState(false);
  const [shouldNavigateBack, setShouldNavigateBack] = useState(false);

  useEffect(() => {
    setDate(new Date().toISOString().split("T")[0]);
  }, []);

  useEffect(() => {
    if (shouldNavigateBack) {
      router.back();
    }
  }, [shouldNavigateBack, router]);

  const handleOpenPopUp = () => {
    setPopUpExpense(true);
  };

  const handleClosePopUp = () => {
    setPopUpExpense(false);
  };

  const handleSuccessOpenPopUp = () => {
    setSuccessOpenPopUp(true);
  };

  const handleSuccessClosePopUp = () => {
    setSuccessOpenPopUp(false);
    setShouldNavigateBack(true);
  };

  const goBack = () => {
    router.back();
  };

  const addExpense = async () => {
    if (!expenseTitle || !expenseAmount || !date) {
      handleOpenPopUp();
      return;
    }
    try {
      const incomeDetails = {
        date: date,
        expenseTitle: expenseTitle,
        expenseAmount: expenseAmount,
        userId: user,
      };

      const response = await CreateAddExpense(incomeDetails);
      if (response.error) {
        console.log("Error: ", response.message);
      } else {
        handleSuccessOpenPopUp();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <Header
        title="Add Expense"
        img={Images.LeftArrow()}
        style={styles.header}
        onClick={() => goBack()}
      />
      <div className={styles.txtInputsContainer}>
        <div className={styles.inputContainer}>
          <h5 className={styles.title}>Expense title</h5>
          <TextInput
            img={Images.Pencil()}
            style={styles.txtInput}
            imgStyle={styles.img}
            value={expenseTitle}
            onChange={(e: any) => setExpenseTitle(e.target.value)}
          />

          <h5 className={styles.title}>Expense Amount</h5>
          <TextInput
            img={Images.Dollar()}
            imgStyle={styles.img}
            style={styles.txtInput}
            type="number"
            value={expenseAmount}
            onChange={(e: any) => setExpenseAmount(e.target.value)}
          />

          <Button
            title="Add Expense"
            style={styles.btn}
            buttonTextStyle={styles.btnTxt}
            onClick={addExpense}
          />
        </div>
      </div>
      <PopUp
        popUpTitle="Failed"
        popUpText="Please fill of the required fields"
        isOpen={popUpExpense}
        onClose={handleClosePopUp}
      />

      <PopUp
        popUpTitle="Success"
        popUpText="Expense added successfully"
        isOpen={successOpenPopUp}
        onClose={handleSuccessClosePopUp}
      />
    </div>
  );
};

export default Index;
