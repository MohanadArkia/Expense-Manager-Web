import React from 'react'
import styles from "../../src/styles/reminders.module.css";
import Header from '@/components/Header';
import Images from '@/assets/images/images';
import BottomNavigator from '@/components/BottomNavigator';

const index = () => {
  return (
    <div className={styles.container}>
        <Header title="Reminders" img={Images.LeftArrow()} style={styles.header}/>
        <BottomNavigator />
    </div>
  )
}

export default index
