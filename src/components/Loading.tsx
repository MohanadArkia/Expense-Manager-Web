import React from "react";
import styles from "../styles/loading.module.css";

const Loading = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.txtLoading}>Loading..</h1>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loading;
