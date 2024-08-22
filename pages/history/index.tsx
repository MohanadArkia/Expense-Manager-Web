import React from "react";
import styles from "../../src/styles/history.module.css";
import Header from "@/components/Header";
import Images from "@/assets/images/images";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <Header
        title="History"
        img={Images.LeftArrow()}
        style={styles.header}
        onClick={() => goBack()}
      />
    </div>
  );
};

export default Index;
