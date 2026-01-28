// src/components/Layout/UserNav/UserNav.jsx
import { NavLink } from "react-router-dom";
import styles from "./UserNav.module.scss";

const UserNav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/recommended"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/library"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        My library
      </NavLink>
    </nav>
  );
};

export default UserNav;
