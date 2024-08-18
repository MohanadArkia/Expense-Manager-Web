import React from 'react';
import styles from "../styles/textInput.module.css";
import Image from 'next/image';
import { textInput } from '../../types/textInput.type';

const TextInput = (props : textInput) => {
  const {img, imgStyle, style} = props;

  return (
    <div className={styles.inputContainer}>
        <input className={style} />
        { img && <Image src={img} alt="Unable to load this image" className={imgStyle} />}
    </div>
  );
};

export default TextInput;
