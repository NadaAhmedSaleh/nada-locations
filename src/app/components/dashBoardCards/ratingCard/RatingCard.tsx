import React from "react";
import styles from "./RatingCard.module.scss";
import RatingText from "./hearder/ratingText/RatingText";
import RatingCardHeader from "./hearder/RatingCardHeader";
import RiskProfile from "./data/RatingCardData";

const RatingCard = () => {
  return (
    <div className={styles.ratingCard}>
      <RatingCardHeader />
      <RiskProfile />
    </div>
  );
};

export default RatingCard;
