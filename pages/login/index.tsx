import React, { useContext, useState } from "react";
import styles from "../../src/styles/login.module.css";
import Image from "next/image";
import Images from "@/assets/images/images";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import PopUp from "@/components/PopUp";
import { Login } from "@/utils/api";
import Loading from "@/components/Loading";
import MyContext from "@/store/MyContext";

const Index = () => {
  const navigate = useRouter();
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [incorrectCredentials, setIncorrectCredentials] = useState(false);
  const { setUser } = useContext(MyContext);

  const handleOpenPopUp = () => {
    setIsPopUpOpen(true);
  };

  const handleClosePopUp = () => {
    setIsPopUpOpen(false);
  };

  const handleOpenIncorrectCredentialsPopUp = () => {
    setIncorrectCredentials(true);
  };

  const handleCloseIncorrectCredentialsPopUp = () => {
    setIncorrectCredentials(false);
  };

  const navigateTo = (route: string) => {
    navigate.push(route);
  };

  const handleLogin = async () => {
    if (!userName || !password) {
      handleOpenPopUp();
      return;
    }
    try {
      setLoading(true);

      const loginDetails = {
        name: userName,
        password,
      };

      const response = await Login(loginDetails);

      setLoading(false);
      if (response.error) {
        console.log("Error: ", response.error);
        handleOpenIncorrectCredentialsPopUp();
      } else {
        const userId = response.user._id;
        localStorage.setItem("LoggedIn", "Yes");
        localStorage.setItem("UserId", userId);
        setUser(userId);
        navigateTo("home");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.secondaryContainer}>
        <Image
          src={Images.Logo()}
          alt="Unable to load this image"
          priority={true}
        />
        <h1 className={styles.text}>E Manager</h1>
        <TextInput
          style={styles.txtInput}
          placeHolder="Username"
          img={Images.Person()}
          imgStyle={styles.icon}
          value={userName}
          onChange={(e: any) => setUserName(e.target.value)}
        />
        <TextInput
          style={styles.txtInput}
          placeHolder="Password"
          img={Images.Lock()}
          imgStyle={styles.icon}
          type="password"
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <Button
          title="Login"
          style={styles.btnLogin}
          buttonTextStyle={styles.btnLoginText}
          onClick={handleLogin}
        />
        {/*
        <h5
          onClick={() => navigateTo("forgotPassword")}
          className={styles.forgotPass}
        >
          Forgot Password?
        </h5>
        */}

        {/*
        <Button
          title="Continue with Google"
          style={styles.btnGoogle}
          buttonTextStyle={styles.btnGoogleText}
          img={Images.Google()}
        />
        */}
        <h6
          onClick={() => navigateTo("register")}
          className={styles.registerText}
        >
          Don&apos;t have an account?{" "}
          <span className={styles.registerSpanText}>Register here</span>
        </h6>

        <PopUp
          popUpTitle="Failed"
          popUpText="Please fill all of the required fields"
          isOpen={isPopUpOpen}
          onClose={handleClosePopUp}
        />

        <PopUp
          popUpTitle="Incorrect"
          popUpText="Incorrect username or password"
          isOpen={incorrectCredentials}
          onClose={handleCloseIncorrectCredentialsPopUp}
        />
      </div>
    </div>
  );
};

export default Index;
