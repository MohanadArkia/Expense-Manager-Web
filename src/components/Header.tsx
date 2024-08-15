import React from 'react';
import { HeaderProps } from '../../types/header.type';
import Image from 'next/image';
import styles from "../styles/header.module.css";

const Header = (props : HeaderProps) => {
  const {title, img, style, headerTitleStyle, onClick} = props;

  return (
    <div className={`${style} ${styles.headerContainer}`}>
        <h5 className={`${headerTitleStyle} ${styles.headerTitle}`}>{title}</h5>
        { img && (
           <div onClick={onClick} >
            <Image src={img} alt="Unable to load this image" className={styles.img}/>
           </div> 
        )}
    </div>
  );
};

export default Header;
