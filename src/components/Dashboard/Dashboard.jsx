// src/components/Dashboard/Dashboard.jsx
import styles from "./Dashboard.module.scss";

const Dashboard = ({ children }) => {
  return <aside className={styles.dashboard}>{children}</aside>;
};

export default Dashboard;
