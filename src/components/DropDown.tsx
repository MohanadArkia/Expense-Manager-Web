import React, { useState } from 'react';
import styles from '../styles/dropDown.module.css';

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Select One');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item : string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownButton} onClick={toggleDropdown}>{selectedItem}</button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          <a className={styles.dropdownItem} onClick={() => handleItemClick('Daily')}>Daily</a>
          <a className={styles.dropdownItem} onClick={() => handleItemClick('Weekly')}>Weekly</a>
          <a className={styles.dropdownItem} onClick={() => handleItemClick('Monthly')}>Monthly</a>
          <a className={styles.dropdownItem} onClick={() => handleItemClick('Yearly')}>Yearly</a>
        </div>
      )}
    </div>
  );
};

export default DropDown;

