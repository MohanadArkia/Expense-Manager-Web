import React from 'react'
import styles from "../../src/styles/addIncome.module.css";
import Header from '@/components/Header';
import Images from '@/assets/images/images';
import { useRouter } from 'next/router';
import Calendar from 'react-calendar';
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';

const Index = () => {

    const router = useRouter();

    const goBack = () => {
        router.back();
    };

  return (
    <div className={styles.container}>
        <Header title="Add Income" img={Images.LeftArrow()} style={styles.header} onClick={() => goBack()}/>
        <div className={styles.calendarContainer}>
            <div className={styles.calendar}>
                <Calendar className={styles.calendarColors} />
            </div>
        </div>

        <div className={styles.txtInputsContainer}>

           <div className={styles.inputContainer}>
               <h5 className={styles.title}>Income title</h5>
               <TextInput img={Images.pencil()} style={styles.txtInput} imgStyle={styles.img}/>

               <h5 className={styles.title}>Income Amount</h5>
               <TextInput img={Images.dollar()} imgStyle={styles.img} style={styles.txtInput} />

               <Button title="Add Income" style={styles.btn} buttonTextStyle={styles.btnTxt} />
           </div> 
        </div>
    </div>
  )
}

export default Index
