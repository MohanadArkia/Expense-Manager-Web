import React from 'react'
import styles from "../../src/styles/add.module.css"
import BottomNavigator from '@/components/BottomNavigator'
import Images from '@/assets/images/images'
import Header from '@/components/Header'
import Card from '@/components/Card'

const index = () => {
  return (
    <div className={styles.container}>
        <Header img={Images.LeftArrow()} title="Add" style={styles.header} headerTitleStyle={styles.headerTitle} />
        <div className={styles.addContainer}>
        </div> 
        <BottomNavigator />
    </div>
  )
}

export default index
