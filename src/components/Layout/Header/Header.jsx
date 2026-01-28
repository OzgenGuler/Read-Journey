// src/components/Layout/Header/Header.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // React Icons
import { IoBookOutline } from "react-icons/io5"; // Logo için
import { logout } from "../../../redux/auth/authOperations";
import UserNav from "../UserNav/UserNav";
import UserBar from "../UserBar/UserBar";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import styles from "./Header.module.scss";

const Header = () => {
  const dispatch = useDispatch();
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  const toggleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/recommended" className={styles.logo}>
          <IoBookOutline className={styles.logoIcon} />
          <span className={styles.logoText}>Read Journey</span>
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          <UserNav />
        </div>

        {/* User Bar + Logout */}
        <div className={styles.userSection}>
          <UserBar />
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Log out
          </button>
        </div>

        {/* Mobile Burger */}
        <button onClick={toggleBurger} className={styles.burgerBtn}>
          {isBurgerOpen ? (
            <HiX className={styles.burgerIcon} />
          ) : (
            <HiOutlineMenu className={styles.burgerIcon} />
          )}
        </button>
      </div>

      {/* Burger Menu */}
      {isBurgerOpen && (
        <BurgerMenu
          onClose={() => setIsBurgerOpen(false)}
          onLogout={handleLogout}
        />
      )}
    </header>
  );
};

export default Header;
