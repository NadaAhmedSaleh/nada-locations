import React from "react";
import styles from "./RatingCard.module.scss";
import RatingText from "../../ratingText/RatingText";
import RatingCardHeader from "./hearder/RatingCardHeader";
import RatingCardData from "./data/RatingCardData";

const RatingCard = () => {
  return (
    <div className={styles.ratingCard}>
      <RatingCardHeader />
      <RatingCardData />
    </div>
  );
};

export default RatingCard;
