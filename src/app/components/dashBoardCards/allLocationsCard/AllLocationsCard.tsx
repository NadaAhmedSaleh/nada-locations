import React from "react";
import styles from "./AllLocationsCard.module.scss";

const AllLocationsCard = ({ locationsCount }: { locationsCount: number }) => {
  return (
    <div className={styles.allLocationsCard}>
      <div className={styles.locationsCountContainer}>
        <h1>{locationsCount}</h1>
        <p>Total locations</p>
      </div>
      <div className={styles.allLocationsText}>
        <h1>ALL LOCATIONS</h1>
        <p>Get access to the results of all your locations</p>
      </div>
    </div>
  );
};

export default AllLocationsCard;
