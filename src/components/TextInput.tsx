import React from "react";
import styles from "../styles/textInput.module.css";
import Image from "next/image";
import { textInput } from "../../types/textInput.type";

const TextInput = (props: textInput) => {
  const {
    img,
    imgStyle,
    style,
    readOnly,
    type,
    placeHolder,
    secondImg,
    secondImgStyle,
    secondImgClick,
  } = props;

  return (
    <div className={styles.inputContainer}>
      <input
        className={style}
        readOnly={readOnly}
        type={type}
        placeholder={placeHolder}
        aria-label="placeHolder"
      />
      {img && (
        <Image src={img} alt="Unable to load this image" className={imgStyle} />
      )}
      {secondImg && (
        <Image
          src={secondImg}
          alt="Unable to load this image"
          className={secondImgStyle}
          onClick={secondImgClick}
        />
      )}
    </div>
  );
};

export default TextInput;
