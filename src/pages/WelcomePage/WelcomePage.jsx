// src/pages/WelcomePage/WelcomePage.jsx
import { Link } from "react-router-dom";
import styles from "./WelcomePage.module.scss";

const WelcomePage = () => {
  return (
    <div className={styles.welcomePage}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Expand your mind, reading{" "}
            <span className={styles.highlight}>a book</span>
          </h1>
          <p className={styles.subtitle}>
            Track your reading progress and discover new books
          </p>
          <div className={styles.buttons}>
            <Link to="/register" className={styles.registerBtn}>
              Register
            </Link>
            <Link to="/login" className={styles.loginBtn}>
              Log In
            </Link>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src="/welcome-illustration.png"
            alt="Reading"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
