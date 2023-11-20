import React from "react";
import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.text}>© Made by MD IMRAN RAJ</div>
      <div>
        <img src="./instagram.png" alt="" />
        <img src="./linkedin.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;
