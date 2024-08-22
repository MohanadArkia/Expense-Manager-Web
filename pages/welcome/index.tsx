import React from 'react'
import styles from "../../src/styles/welcome.module.css";
import Image from 'next/image';
import Images from '@/assets/images/images';
import Button from '@/components/Button';
import { useRouter } from 'next/router';

const Index = () => {

  const navigate = useRouter();

  const goToLogin = () => {
    navigate.push("login");
  };

  return (
    <div className={styles.container}>
        <div className={styles.secondaryContainer}>
            <h1 className={styles.title}>Manage your expenses fast and easy</h1>
            <Image src={Images.Rocket()} alt="Unable to load this image" className={styles.img} priority={true}/>
            <Button title="Let's Go" style={styles.button} buttonTextStyle={styles.buttonText} onClick={goToLogin}/>
        </div>
    </div>
  )
}

export default Index;
