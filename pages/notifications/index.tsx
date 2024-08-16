import React from 'react'
import styles from "../../src/styles/notifications.module.css"
import Header from '@/components/Header'
import Images from '@/assets/images/images'
import BottomNavigator from '@/components/BottomNavigator'
import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter();
    
  const goBack = () => {
    router.back();
  }

  return (
    <div className={styles.container}>
        <Header title="Notifications" img={Images.LeftArrow()} style={styles.header} onClick={() => goBack()}/>

        <BottomNavigator />
    </div>
  )
}

export default Index;
