import React from 'react';
import styles from "../../src/styles/savings.module.css";
import Header from '@/components/Header';
import Images from '@/assets/images/images';
import { useRouter } from 'next/router';
import BottomNavigator from '@/components/BottomNavigator';
import Image from 'next/image';

const Index = () => {

    const router = useRouter();

    const goBack = () => {
        router.back();
    };

  return (
    <div className={styles.container}>
        <Header title="Savings"
            img={Images.LeftArrow()}
            style={styles.header}
            headerTitleStyle={styles.headerTitle}
            onClick={goBack}
            />

        <div className={styles.savingsCircleContainer}>
            <div className={styles.savingsCircle}>
                <h6 className={styles.savingsCircleText}>$0</h6>
            </div> 
        </div>

        <div className={styles.goalsContainer}>
            <div className={styles.goalsAndImgContainer}>
                <h5 className={styles.goalsTitle}>Your Goals</h5>
                <Image className={styles.img} src={Images.More()} alt="Unable to load this image"/>
            </div> 
        </div>
        <BottomNavigator />
    </div>
  );
};

export default Index;
