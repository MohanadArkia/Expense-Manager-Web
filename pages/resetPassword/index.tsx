import React, { useState } from "react";
import styles from "../../src/styles/resetPassword.module.css";
import Image from "next/image";
import Images from "@/assets/images/images";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";

const Index = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [passwordEye1, setPasswordEye1] = useState(Images.HidePassword());

  const [showPassword2, setShowPassword2] = useState(false);
  const [passwordEye2, setPasswordEye2] = useState(Images.HidePassword());

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
    setPasswordEye1(
      showPassword1 ? Images.HidePassword() : Images.ShowPassword()
    );
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
    setPasswordEye2(
      showPassword2 ? Images.HidePassword() : Images.ShowPassword()
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.secondaryContainer}>
        <Image src={Images.Laptop()} alt="Unable to load this image" />
        <h3 className={styles.title}>Change Password</h3>
        <TextInput
          style={styles.txtInput}
          img={Images.Lock()}
          secondImg={passwordEye1}
          imgStyle={styles.icon}
          secondImgStyle={styles.icon2}
          placeHolder="Enter your new password"
          type={showPassword1 ? "text" : "password"}
          secondImgClick={togglePasswordVisibility1}
        />
        <TextInput
          style={styles.txtInput}
          img={Images.Lock()}
          secondImg={passwordEye2}
          imgStyle={styles.icon}
          secondImgStyle={styles.icon2}
          placeHolder="Re-Enter your new password"
          type={showPassword2 ? "text" : "password"}
          secondImgClick={togglePasswordVisibility2}
        />
        <Button
          title="Confirm"
          style={styles.btnConfirm}
          buttonTextStyle={styles.btnConfirmText}
        />
      </div>
    </div>
  );
};

export default Index;
