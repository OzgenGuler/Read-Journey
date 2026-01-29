// src/pages/RegisterPage/RegisterPage.jsx
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import LogoMobil from '../../assets/LogoMobil.png';
import RegisterForm from '../../components/Auth/RegisterForm/RegisterForm';
import styles from './RegisterPage.module.scss';

const RegisterPage = () => {
  return (
    <div className={styles.registerPage}>
      <div className={styles.containerLeft}>
        <div className={styles.formSection}>
          <div className={styles.Logo}>
            <img src={Logo} alt="Read Journey" className={styles.logoImage} />
            {/* <img
              src={LogoMobil}
              alt="Read Journey"
              className={styles.LogoMobil}
            /> */}
          </div>
          <h1 className={styles.title}>
            Expand your mind, reading{' '}
            <span className={styles.highlight}>a book</span>
          </h1>
          <RegisterForm />
          <p className={styles.loginLink}>
            <Link to="/login" className={styles.link}>
              Already have an account ?{' '}
            </Link>
          </p>
        </div>
      </div>
      <div className={styles.containerRight}>
        <div className={styles.divider}>
          <div className={styles.imageWrapper}>
            <img
              src="/src/assets/images/iPhoneBlack.png"
              alt="Reading"
              className={styles.image}
            />
            {/* <img
              src="/src/assets/images/iPhoneBlackMobile.png"
              alt="Reading"
              className={styles.imageMobile}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
