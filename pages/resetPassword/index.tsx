import React from 'react'
import styles from "../../src/styles/resetPassword.module.css";
import Image from 'next/image';
import Images from '@/assets/images/images';
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';

const index = () => {
  return (
    <div className={styles.container}>
        <div className={styles.secondaryContainer}>
            <Image src={Images.Laptop()} alt="Unable to load this image"/> 
            <h3 className={styles.title}>Change Password</h3>
            <TextInput style={styles.txtInput} img={Images.Lock()} secondImg={Images.HidePassword()} imgStyle={styles.icon} secondImgStyle={styles.icon2} placeHolder='Enter your new password' type='password'/>
            <TextInput style={styles.txtInput} img={Images.Lock()} secondImg={Images.HidePassword()} imgStyle={styles.icon} secondImgStyle={styles.icon2} placeHolder='Re-Enter your new password' type='password'/>
            <Button title="Confirm" style={styles.btnConfirm} buttonTextStyle={styles.btnConfirmText} />
        </div>
    </div>
  )
}

export default index
