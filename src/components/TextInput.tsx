import React from "react";
import styles from "../styles/textInput.module.css";
import Image from "next/image";
import { TextInputProps } from "../../types/textInput.type";

const TextInput = (props: TextInputProps) => {
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
    value,
    onChange,
  } = props;

  return (
    <div className={styles.inputContainer}>
      <input
        className={style}
        readOnly={readOnly}
        type={type}
        placeholder={placeHolder}
        aria-label="placeHolder"
        value={value}
        onChange={onChange}
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
