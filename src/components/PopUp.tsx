import React from "react";
import styles from "../styles/popUp.module.css";
import Button from "./Button";
import { PopUpProps } from "../../types/popup.type";

const PopUp = (props : PopUpProps) => {
  const {popUpTitle, popUpText, isOpen, onClose} = props;

  return (
    <div>
        {isOpen ? (
            <div className={styles.container}>
                <div className={styles.overlay} onClick={onClose} />
                <div className={styles.popup} >
                    <h2 className={styles.popUpTitleStyle}>{popUpTitle}</h2>
                    <p className={styles.popUpTextStyle}>{popUpText}</p>
                    <Button title="Close" onClick={onClose} style={styles.popUpButton}/>
                </div>
            </div>
        ) : null} 
    </div>
  )
}

export default PopUp
