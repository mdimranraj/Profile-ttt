import React from "react";
import styles from "../styles/Navbar.module.css";
const navbar = () => {
  return (
    <div className={styles.mainContainer}>
      <a href="#">
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="./ttt.svg" alt="" />
        <img className={styles.line} src="./line.png" alt="" />
        <div>STORIES</div>
      </div>
      </a>
      <div>
        <button type="button" className={`btn btn-warning ${styles.button}`}>
          Courses
        </button>
      </div>
    </div>
  );
};

export default navbar;
