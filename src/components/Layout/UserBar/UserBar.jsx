// src/components/Layout/UserBar/UserBar.jsx
import { useSelector } from "react-redux";
import styles from "./UserBar.module.scss";

const UserBar = () => {
  const { user } = useSelector((state) => state.auth);

  // DEBUG - Console'da ne görüyoruz bakalım
  console.log("UserBar - Full User Object:", user);
  console.log("UserBar - User Name:", user?.name);

  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : "U";
  };

  return (
    <div className={styles.userBar}>
      <div className={styles.avatar}>{getInitial(user?.name)}</div>
      <span className={styles.userName}>{user?.name || "User"}</span>
    </div>
  );
};

export default UserBar;
