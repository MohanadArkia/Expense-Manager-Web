import React, { useState } from "react";
import styles from "../../src/styles/register.module.css";
import TextInput from "@/components/TextInput";
import Images from "@/assets/images/images";
import Button from "@/components/Button";

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordEye, setPasswordEye] = useState(Images.HidePassword());

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
        />
        <TextInput
          style={styles.txtInput}
          img={Images.Letter()}
          imgStyle={styles.icon}
          placeHolder="Email"
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
        />
        <Button
          title="Sign up"
          style={styles.btnSignUp}
          buttonTextStyle={styles.btnSignUpText}
        />
        <h4 className={styles.text}>Or sign up with</h4>
        <Button
          title="Google"
          style={styles.btnGoogle}
          img={Images.Google()}
          buttonTextStyle={styles.btnGoogleText}
        />
      </div>
    </div>
  );
};

export default Index;
