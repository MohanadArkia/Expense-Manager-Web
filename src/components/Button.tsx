import React from "react";
import Image from "next/image";
import { ButtonProps } from "../../types/button.type";

const Button = (props: ButtonProps) => {
  const { title, style, buttonTextStyle, onClick, img, imgStyle } = props;
  return (
    <div className={style} onClick={onClick} role="button" aria-label="title">
      {img && (
        <Image src={img} className={imgStyle} alt="Unable to load this image" />
      )}
      <p className={buttonTextStyle}>{title}</p>
    </div>
  );
};

export default Button;
