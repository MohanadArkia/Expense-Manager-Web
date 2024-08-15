import React from 'react';
import style from "../styles/bottomNav.module.css";
import Image from 'next/image';
import Images from '@/assets/images/images';
import { useRouter } from 'next/router';

const BottomNavigator = () => {
    
  const router = useRouter();

  const navigate = (route : string) => {
    router.push(route);
  }

  return (
    <div className={style.container}>
        <div className={style.imgContainer}>
            <Image className={style.img} src={Images.Home()} alt="Unable to load this image" onClick={() => navigate("/")}/>
            <Image className={style.img} src={Images.Savings()} alt="Unable to load this image" onClick={() => navigate("savings")}/> 
            <Image className={style.biggerImg} src={Images.Add()} alt="Unable to load this image" onClick={() => navigate("add")} /> 
            <Image className={style.img} src={Images.Notification()} alt="Unable to load this image" onClick={() => navigate("notifications")}/> 
            <Image className={style.img} src={Images.Reminder()} alt="Unable to load this image" onClick={() => navigate("reminders")}/> 
        </div>
    </div>
  )
}

export default BottomNavigator
