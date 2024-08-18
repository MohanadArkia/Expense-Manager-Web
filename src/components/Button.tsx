import React from 'react'
import { button } from '../../types/button.type';

const Button = (props : button) => {
    const {title, style, buttonTextStyle} = props;
  return (
    <div className={style}>
        <p className={buttonTextStyle}>{title}</p>
    </div>
  )
}

export default Button
