import React from "react";
import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.text}>© Made by MD IMRAN RAJ</div>
      <div>
        <a href="http://www.instagram.com/mdimranraj"><img src="./instagram.png" alt="" /></a>
        <a href="https://www.linkedin.com/in/md-imran-raj-952659201/"><img src="./linkedin.png" alt="" /></a>
      </div>
    </div>
  );
};

export default Footer;
