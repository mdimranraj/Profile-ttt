import React from "react";
import styles from "../styles/Icon.module.css";
const Icon = ({ type, color, dimentions, imgDimentions }) => {
  return (
    <div
      className={styles.mainContainer}
      style={{
        backgroundColor: `${color}`,
        width: `${dimentions}`,
        height: `${dimentions}`,
      }}
    >
      <img
        style={{
          width: `${imgDimentions}`,
          height: `${imgDimentions}`,
        }}
        src={`./${type}.png`}
        alt=""
      />
    </div>
  );
};

export default Icon;
