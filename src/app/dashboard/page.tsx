import styles from "./dashboard.module.scss";
import PageLayout from "../components/pageLayout/PageLayout";
import AllLocationsCard from "../components/dashBoardCards/allLocationsCard/AllLocationsCard";
import StatusCard from "../components/dashBoardCards/statusCard/StatusCard";
import RatingCard from "../components/dashBoardCards/ratingCard/RatingCard";

export default function Dashboard() {
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
        <AllLocationsCard locationsCount={1234} />
        <StatusCard />
        <div className={styles.gridItem}>3</div>
        <RatingCard />
      </div>
    </PageLayout>
  );
}
