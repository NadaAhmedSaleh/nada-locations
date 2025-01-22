import styles from "./dashboard.module.scss";
import PageLayout from "../components/PageLayout/PageLayout";

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
      dashboard content
    </PageLayout>
  );
}
