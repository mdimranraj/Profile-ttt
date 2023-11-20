import React from "react";
import styles from "../styles/NumberText.module.css";

const NumberText = ({ subtitle, number }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.rectangle}>{number}</div>
      <div className={styles.text}>{subtitle}</div>
    </div>
  );
};

export default NumberText;
