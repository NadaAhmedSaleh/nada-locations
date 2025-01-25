"use client";
import React from "react";
import styles from "./StatusCard.module.scss";
import CustomButton from "../customButton/CustomButton";
import RatingText from "../../ratingText/RatingText";
import { ratingColors } from "@/app/constants/enums";
const StatusCard = () => {
  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className={styles.statusCard}>
      <div className={styles.piChartContainer}>
        <div className={styles.piChartLabelsContainer}>
          <RatingText text="High Risk" color={ratingColors.VERY_HIGH} />
          <RatingText text="Medium Risk" color={ratingColors.MEDIUM} />
          <RatingText text="Low Risk" color={ratingColors.LOW} />
        </div>
        <div className={styles.piChart}></div>
      </div>
      <div className={styles.buttonContainer}>
        <CustomButton label={"report"} onClick={handleButtonClick} />
        <CustomButton label={"target"} onClick={handleButtonClick} />
        <CustomButton label={"actions"} onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default StatusCard;
