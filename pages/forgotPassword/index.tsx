import React from "react";
import styles from "../../src/styles/forgotPassword.module.css";
import Image from "next/image";
import Images from "@/assets/images/images";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";

const Index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.secondaryContainer}>
        <Image src={Images.SadFace()} alt="Unable to load this image" />
        <h1 className={styles.text}>Having trouble logging in ?</h1>
        <h5 className={styles.instructionTxt}>
          Enter your email and check your mail box
        </h5>
        <TextInput
          style={styles.txtInput}
          img={Images.Letter()}
          imgStyle={styles.icon}
          placeHolder="Email"
        />
        <Button
          title="Send recovery link"
          style={styles.btnRecovery}
          buttonTextStyle={styles.btnRecoveryText}
        />
      </div>
    </div>
  );
};

export default Index;
