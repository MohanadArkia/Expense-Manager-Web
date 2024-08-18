import React from 'react'
import styles from "../../src/styles/addGoal.module.css";
import Header from '@/components/Header';
import Images from '@/assets/images/images';
import { useRouter } from 'next/router';
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';
import DropDown from '@/components/DropDown';

const Index = () => {

    const router = useRouter();

    const goBack = () => {
        router.back();
    };

  return (
    <div className={styles.container}>
        <Header title="Add Goal" img={Images.LeftArrow()} style={styles.header} onClick={() => goBack()}/>
        <div className={styles.txtInputsContainer}>

           <div className={styles.inputContainer}>
               <h5 className={styles.title}>Goal title</h5>
               <TextInput img={Images.pencil()} style={styles.txtInput} imgStyle={styles.img}/>

               <h5 className={styles.title}>Amount</h5>
               <TextInput img={Images.dollar()} imgStyle={styles.img} style={styles.txtInput} />

               <h5 className={styles.title}>Contribution Type</h5>
               <DropDown />

               <h5 className={styles.title}>Dead Line</h5>
               <TextInput img={Images.Calendar()} imgStyle={styles.img} style={styles.txtInput} />

               <Button title="Add Goal" style={styles.btn} buttonTextStyle={styles.btnTxt} />
           </div> 
        </div>
    </div>
  )
}

export default Index
