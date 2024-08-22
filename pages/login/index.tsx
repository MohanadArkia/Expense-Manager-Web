import React from "react";
import styles from "../../src/styles/login.module.css";
import Image from "next/image";
import Images from "@/assets/images/images";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import { useRouter } from "next/router";

const Index = () => {
  const navigate = useRouter();

  const goToRegister = (route: string) => {
    navigate.push(route);
  };
  return (
    <div className={styles.container}>
      <div className={styles.secondaryContainer}>
        <Image src={Images.Logo()} alt="Unable to load this image" />
        <h1 className={styles.text}>E Manager</h1>
        <TextInput
          style={styles.txtInput}
          placeHolder="Username"
          img={Images.Person()}
          imgStyle={styles.icon}
        />
        <TextInput
          style={styles.txtInput}
          placeHolder="Password"
          img={Images.Lock()}
          imgStyle={styles.icon}
          type="password"
        />
        <Button
          title="Login"
          style={styles.btnLogin}
          buttonTextStyle={styles.btnLoginText}
        />
        <h5
          onClick={() => goToRegister("forgotPassword")}
          className={styles.forgotPass}
        >
          Forgot Password?
        </h5>
        <Button
          title="Continue with Google"
          style={styles.btnGoogle}
          buttonTextStyle={styles.btnGoogleText}
          img={Images.Google()}
        />
        <h6
          onClick={() => goToRegister("register")}
          className={styles.registerText}
        >
          Don&apos;t have an account?{" "}
          <span className={styles.registerSpanText}>Register here</span>
        </h6>
      </div>
    </div>
  );
};

export default Index;
