"use client";
import React from "react";
import styles from "./StatusCard.module.scss";
import CustomButton from "../customButton/CustomButton";
const StatusCard = () => {
  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className={styles.statusCard}>
      <div style={{ background: "red" }}></div>
      <div className={styles.buttonContainer}>
        <CustomButton label={"report"} onClick={handleButtonClick} />
        <CustomButton label={"target"} onClick={handleButtonClick} />
        <CustomButton label={"actions"} onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default StatusCard;
