import React from 'react'
import { button } from '../../types/button.type';
import Image from 'next/image';

const Button = (props : button) => {
  const {title, style, buttonTextStyle, onClick, img, imgStyle} = props;
  return (
    <div className={style} onClick={onClick} role='button' aria-label='title'>
        { img && <Image src={img} className={imgStyle} alt="Unable to load this image" />}
        <p className={buttonTextStyle}>{title}</p>
    </div>
  )
}

export default Button
