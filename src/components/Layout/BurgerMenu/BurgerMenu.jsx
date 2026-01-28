// src/components/Layout/BurgerMenu/BurgerMenu.jsx
import { useEffect } from "react";
import UserNav from "../UserNav/UserNav";
import styles from "./BurgerMenu.module.scss";

const BurgerMenu = ({ onClose, onLogout }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.menu}>
        <UserNav />
        <button onClick={onLogout} className={styles.logoutBtn}>
          Log out
        </button>
      </div>
    </>
  );
};

export default BurgerMenu;
