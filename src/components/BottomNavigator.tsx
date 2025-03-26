import React from "react";
import style from "../styles/bottomNav.module.css";
import Image from "next/image";
import Images from "@/assets/images/images";
import { useRouter } from "next/router";

const BottomNavigator = () => {
  const router = useRouter();

  const navigate = (route: string) => {
    router.push(route);
  };

  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image
          className={style.img}
          src={Images.Home()}
          alt="Unable to load this image"
          onClick={() => navigate("home")}
          role="button"
          aria-label="Home"
          tabIndex={0}
        />
        {/*
        <Image
          className={style.img}
          src={Images.Savings()}
          alt="Unable to load this image"
          onClick={() => navigate("savings")}
          role="button"
          aria-label="Savings"
          tabIndex={0}
        />
        */}
        <Image
          className={style.img}
          src={Images.Add()}
          alt="Unable to load this image"
          onClick={() => navigate("add")}
          role="button"
          aria-label="Add"
          tabIndex={0}
        />
        {/*
        <Image
          className={style.img}
          src={Images.Notification()}
          alt="Unable to load this image"
          onClick={() => navigate("notifications")}
          role="button"
          aria-label="Notifications"
          tabIndex={0}
        />
        
        <Image
          className={style.img}
          src={Images.Reminder()}
          alt="Unable to load this image"
          onClick={() => navigate("reminders")}
          role="button"
          aria-label="Reminders"
          tabIndex={0}
        />
        */}
      </div>
    </div>
  );
};

export default BottomNavigator;
