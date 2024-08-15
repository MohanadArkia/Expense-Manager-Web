import React from 'react'
import styles from "../styles/card.module.css";
import Image from 'next/image';
import { CardProps } from '../../types/card.types';

const Card = (props : CardProps) => {

  const {img, title, price} = props;

  return (
    <div className={styles.container}>
        <div className={styles.cardContainer}>
            <Image className={styles.image} src={img} alt="Image not found"/>
            <h5 className={styles.text}>{title}</h5>
            <h5 className={styles.text}>${price}</h5>
        </div>
    </div>
  )
}

export default Card
