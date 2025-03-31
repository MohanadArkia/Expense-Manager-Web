import React, { useEffect } from "react";
import styles from "../src/styles/splash.module.css";
import Image from "next/image";
import Images from "@/assets/images/images";
import { useRouter } from "next/router";

const Index = () => {
  const navigate = useRouter();

  const navigateTo = (route: string) => {
    navigate.push(route);
  };

  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem("Visited")) {
        navigate.replace("login");
      }
      if (localStorage.getItem("Visited") && localStorage.getItem("LoggedIn")) {
        navigate.replace("home");
      }
      navigateTo("welcome");
    }, 2000);
  });

  return (
    <div className={styles.container}>
      <Image
        src={Images.Logo()}
        alt="Unable to load this image"
        priority={true}
      />
    </div>
  );
};

export default Index;
