import React from "react";
import Image from "next/image";
import { CardProps } from "../../types/card.types";

const Card = (props: CardProps) => {
  const { img, title, price, style, textStyle, imgStyle, titleStyle, onClick, hover } = props;

  return (
    <div onClick={onClick} className={hover} role="button" aria-label={title} tabIndex={0}>
      <div className={style}>
        <Image className={imgStyle} src={img} alt="Image not found" />
        <h5 className={titleStyle}>{title}</h5>
        {price !== undefined && <h5 className={textStyle}>${price}</h5>}
      </div>
    </div>
  );
};

export default Card;
