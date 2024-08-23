import React, { useState } from "react";
import styles from "../../src/styles/register.module.css";
import TextInput from "@/components/TextInput";
import Images from "@/assets/images/images";
import Button from "@/components/Button";
import PopUp from "@/components/PopUp";
// import { createUser } from "../../src/utils/api";

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordEye, setPasswordEye] = useState(Images.HidePassword());
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleOpenPopUp = () => {
    setIsPopUpOpen(true);
  };

  const handleClosePopUp = () => {
    setIsPopUpOpen(false);
  };

  // const handleRegister = async () => {
  //   try {
  //     if (!userName || !email || !password) {
  //       handleOpenPopUp();
  //     }

  //     const userDetails = {
  //       name,
  //       email,
  //       password,
  //     };

  //     const response = await createUser(userDetails);
  //     if (response.error) {
  //       console.log("Failed To create a use");
  //     } else {
  //       console.log("Success Username have been created successfully");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setPasswordEye(
      showPassword ? Images.HidePassword() : Images.ShowPassword()
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.secondaryContainer}>
        <p className={styles.title}>Create an account</p>
        <TextInput
          style={styles.txtInput}
          img={Images.Person()}
          imgStyle={styles.icon}
          placeHolder="Username"
          value={userName}
          onChange={(e: any) => setUserName(e.target.value)}
        />
        <TextInput
          style={styles.txtInput}
          img={Images.Letter()}
          imgStyle={styles.icon}
          placeHolder="Email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <TextInput
          style={styles.txtInput}
          img={Images.Lock()}
          imgStyle={styles.icon}
          placeHolder="Password"
          type={showPassword ? "text" : "password"}
          secondImg={passwordEye}
          secondImgStyle={styles.secondImg}
          secondImgClick={togglePasswordVisibility}
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <Button
          title="Sign up"
          style={styles.btnSignUp}
          buttonTextStyle={styles.btnSignUpText}
          // onClick={handleRegister}
        />
        <h4 className={styles.text}>Or sign up with</h4>
        <Button
          title="Google"
          style={styles.btnGoogle}
          img={Images.Google()}
          buttonTextStyle={styles.btnGoogleText}
        />
      </div>
      <PopUp
        popUpTitle="Failed"
        popUpText="Please fill all of the required fields"
        isOpen={isPopUpOpen}
        onClose={handleClosePopUp}
      />
    </div>
  );
};

export default Index;
