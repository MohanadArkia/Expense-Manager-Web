import React from 'react'
import styles from "../../src/styles/passwordChanged.module.css";
import Image from 'next/image';
import Images from '@/assets/images/images';
import Button from '@/components/Button';

const index = () => {
  return (
    <div className={styles.container}>
        <div className={styles.secondaryContainer}>
            <Image src={Images.Successfull()} alt="Unable to load this image"/>
            <h1 className={styles.text}>Password has been changed successfully</h1>
            <Button title="Back to login" style={styles.btnBackToLogin} buttonTextStyle={styles.btnBackToLoginText}/>
        </div>
    </div>
  )
}

export default index
