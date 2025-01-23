import React from "react";
import styles from "./RatingText.module.scss";

const RatingText = ({ color, text }: { color: string; text: string }) => {
  return (
    <div className={styles.ratingText}>
      <div className={styles.circle} style={{ backgroundColor: color }}></div>
      <p>{text}</p>
    </div>
  );
};

export default RatingText;
