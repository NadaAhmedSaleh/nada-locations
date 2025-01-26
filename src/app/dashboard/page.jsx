"use client";
import styles from "./dashboard.module.scss";
import PageLayout from "../components/pageLayout/PageLayoutComponent";
import AllLocationsCard from "../components/dashBoardCards/allLocationsCard/AllLocationsCard";
import StatusCard from "../components/dashBoardCards/statusCard/StatusCard";
import RatingCard from "../components/dashBoardCards/ratingCard/RatingCard";
import MapCard from "../components/dashBoardCards/mapCard/map/Map";
import { useEffect, useState } from "react";
import { fetchLocations } from "../server/apis/locations";
export default function Dashboard() {
  const [locationsCount, setLocationsCount] = useState(null);

  useEffect(() => {
    const fetchTotalLocations = async () => {
      try {
        const { total } = await fetchLocations(1, 1);
        setLocationsCount(total);
      } catch (error) {
        console.error("Failed to fetch locations count:", error);
        setLocationsCount(0);
      }
    };

    fetchTotalLocations();
  }, []);

  return (
    <PageLayout
      pageName="Dashboard"
      headerRightComponent={
        <img
          src="/dashboard-icon.png"
          alt="My Image"
          className={styles.dashboardIcon}
        />
      }
    >
      <div className={styles.dashboardGrid}>
        <AllLocationsCard
          locationsCount={
            locationsCount !== null ? locationsCount : "Loading..."
          }
        />
        <StatusCard />
        <MapCard />
        <RatingCard />
      </div>
    </PageLayout>
  );
}
