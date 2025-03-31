import React, { useContext, useEffect, useState } from "react";
import styles from "../../src/styles/addIncome.module.css";
import Header from "@/components/Header";
import Images from "@/assets/images/images";
import { useRouter } from "next/router";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import PopUp from "@/components/PopUp";
import MyContext from "@/store/MyContext";
import { CreateAddIncome } from "@/utils/api";

const Index = () => {
  const router = useRouter();
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [incomeTitle, setIncomeTitle] = useState("");
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [isIncomeAddPopUpOpen, setIsIncomeAddPopUpOpen] = useState(false);
  const { user } = useContext(MyContext);
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
    setIsPopUpOpen(true);
  };

  const handleClosePopUp = () => {
    setIsPopUpOpen(false);
  };

  const handleOpenAddIncomePopUp = () => {
    setIsIncomeAddPopUpOpen(true);
  };

  const handleCloseAddIncomePopUp = () => {
    setIsIncomeAddPopUpOpen(false);
    setShouldNavigateBack(true);
  };

  const addIncome = async () => {
    try {
      if (!incomeTitle || !incomeAmount || !date) {
        handleOpenPopUp();
        return;
      }

      const incomeDetails = {
        date: date,
        incomeTitle: incomeTitle,
        incomeAmount: incomeAmount,
        userId: user,
      };

      const response = await CreateAddIncome(incomeDetails);

      if (response.error) {
        console.log("Error: ", response.message);
      } else {
        handleOpenAddIncomePopUp();
        setIncomeAmount(response.incomeAmount);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const goBack = () => {
    router.back();
  };

  if (incomeAmount < 0) {
    setIncomeAmount(0);
  }

  return (
    <div className={styles.container}>
      <Header
        title="Add Income"
        img={Images.LeftArrow()}
        style={styles.header}
        onClick={() => goBack()}
      />

      <div className={styles.txtInputsContainer}>
        <div className={styles.inputContainer}>
          <h5 className={styles.title}>Income title</h5>
          <TextInput
            img={Images.Pencil()}
            style={styles.txtInput}
            imgStyle={styles.img}
            value={incomeTitle}
            onChange={(e: any) => setIncomeTitle(e.target.value)}
          />

          <h5 className={styles.title}>Income Amount</h5>
          <TextInput
            img={Images.Dollar()}
            imgStyle={styles.img}
            style={styles.txtInput}
            type="number"
            value={incomeAmount}
            onChange={(e: any) => setIncomeAmount(e.target.value)}
          />
          <Button
            title="Add Income"
            style={styles.btn}
            buttonTextStyle={styles.btnTxt}
            onClick={addIncome}
          />
        </div>
      </div>

      <PopUp
        popUpTitle="Incomplete"
        popUpText="Please fill all of the required fields"
        isOpen={isPopUpOpen}
        onClose={handleClosePopUp}
      />

      <PopUp
        popUpTitle="Success"
        popUpText="Income added successfully"
        isOpen={isIncomeAddPopUpOpen}
        onClose={handleCloseAddIncomePopUp}
      />
    </div>
  );
};

export default Index;
