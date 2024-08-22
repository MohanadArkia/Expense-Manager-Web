import React, { useState } from "react";
import styles from "../styles/dropDown.module.css";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Select One");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button
        className={styles.dropdownButton}
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {selectedItem}
      </button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          <a
            className={styles.dropdownItem}
            onClick={() => handleItemClick("Daily")}
            role="menuitem"
            tabIndex={0}
          >
            Daily
          </a>
          <a
            className={styles.dropdownItem}
            onClick={() => handleItemClick("Weekly")}
            role="menuitem"
            tabIndex={0}
          >
            Weekly
          </a>
          <a
            className={styles.dropdownItem}
            onClick={() => handleItemClick("Monthly")}
            role="menuitem"
            tabIndex={0}
          >
            Monthly
          </a>
          <a
            className={styles.dropdownItem}
            onClick={() => handleItemClick("Yearly")}
            role="menuitem"
            tabIndex={0}
          >
            Yearly
          </a>
        </div>
      )}
    </div>
  );
};

export default DropDown;
