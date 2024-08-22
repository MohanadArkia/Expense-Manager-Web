import React, { useEffect } from "react";
import styles from "../src/styles/splash.module.css";
import Image from "next/image";
import Images from "@/assets/images/images";
import { useRouter } from "next/router";

const Index = () => {
  const navigate = useRouter();

  const goToLogin = () => {
    navigate.push("welcome");
  };

  useEffect(() => {
    setTimeout(() => {
      goToLogin();
    }, 2000);
  });

  return (
    <div className={styles.container}>
      <Image src={Images.Logo()} alt="Unable to load this image" />
    </div>
  );
};

export default Index;
