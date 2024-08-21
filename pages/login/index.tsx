import React from 'react'
import styles from "../../src/styles/login.module.css";
import Image from 'next/image';
import Images from '@/assets/images/images';
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';

const index = () => {
  return (
    <div className={styles.container}>
        <div className={styles.secondaryContainer}>
            <Image src={Images.Logo()} alt="Unable to load this image" />
            <h1 className={styles.text}>E Manager</h1>
            <TextInput style={styles.txtInput} placeHolder='Username' img={Images.Person()} imgStyle={styles.icon} />
            <TextInput style={styles.txtInput} placeHolder='Password' img={Images.Lock()} imgStyle={styles.icon} type='password'/>
            <Button title="Login" style={styles.btnLogin} buttonTextStyle={styles.btnLoginText} />
            <h6 className={styles.forgotPass}>Forgot Password?</h6>
            <Button title="Continue with Google" style={styles.btnGoogle} buttonTextStyle={styles.btnGoogleText} img={Images.Google()} />
        </div>
    </div>
  )
}

export default index
