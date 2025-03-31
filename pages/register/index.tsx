import React, { useState, useEffect } from "react";
import styles from "../../src/styles/register.module.css";
import TextInput from "@/components/TextInput";
import Images from "@/assets/images/images";
import Button from "@/components/Button";
import PopUp from "@/components/PopUp";
import { CreateUser } from "../../src/utils/api";
import Loading from "@/components/Loading";
import { useRouter } from "next/router";

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordEye, setPasswordEye] = useState(Images.HidePassword());
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [isUserCreatePopUpOpen, setIsUserCreatePopUpOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEmailExistsPopUp, setIsEmailExistsPopUp] = useState(false);
  const [invalidEmailPopUp, setInvalidEmailPopUp] = useState(false);

  const [shouldNavigateBack, setShouldNavigateBack] = useState(false);
  const router = useRouter();

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

  const handleOpenUserCreatedPopUp = () => {
    setIsUserCreatePopUpOpen(true);
  };

  const handleCloseUserCreatedPopUp = () => {
    setIsUserCreatePopUpOpen(false);
    setShouldNavigateBack(true);
  };

  const handleOpenEmailExistsPopUp = () => {
    setIsEmailExistsPopUp(true);
  };

  const handleCloseEmailExistsPopUp = () => {
    setIsEmailExistsPopUp(false);
  };

  const handleOpenInvalidEmailPopUp = () => {
    setInvalidEmailPopUp(true);
  };

  const handleCloseInvalidEmailPopUp = () => {
    setInvalidEmailPopUp(false);
  };

  const handleRegister = async () => {
    if (!userName || !email || !password) {
      handleOpenPopUp();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      handleOpenInvalidEmailPopUp();
      return;
    }

    try {
      setLoading(true);
      const userDetails = {
        name: userName,
        email,
        password,
      };

      const response = await CreateUser(userDetails);
      setLoading(false);
      if (response.error) {
        if (response.message.code == 11000) {
          handleOpenEmailExistsPopUp();
        }
      } else {
        console.log("Success Username have been created successfully");
        handleOpenUserCreatedPopUp();
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setPasswordEye(
      showPassword ? Images.HidePassword() : Images.ShowPassword(),
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
          onClick={handleRegister}
        />
        {/*
        <h4 className={styles.text}>Or sign up with</h4>
        <Button
          title="Google"
          style={styles.btnGoogle}
          img={Images.Google()}
          buttonTextStyle={styles.btnGoogleText}
        />
        */}
      </div>
      <PopUp
        popUpTitle="Failed"
        popUpText="Please fill all of the required fields"
        isOpen={isPopUpOpen}
        onClose={handleClosePopUp}
      />

      <PopUp
        popUpTitle="Failed"
        popUpText="Email already exists"
        isOpen={isEmailExistsPopUp}
        onClose={handleCloseEmailExistsPopUp}
      />

      <PopUp
        popUpTitle="Success"
        popUpText="User created successfully, go to login"
        isOpen={isUserCreatePopUpOpen}
        onClose={handleCloseUserCreatedPopUp}
      />

      <PopUp
        popUpTitle="Failed"
        popUpText="Invalid email"
        isOpen={invalidEmailPopUp}
        onClose={handleCloseUserCreatedPopUp}
      />
    </div>
  );
};

export default Index;
