// src/pages/LoginPage/LoginPage.jsx
import { Link } from 'react-router-dom';
import LoginForm from '../../components/Auth/LoginForm/LoginForm';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.container}>
        <div className={styles.formSection}>
          <h1 className={styles.title}>Log In</h1>
          <LoginForm />
          <p className={styles.registerLink}>
            <Link to="/register" className={styles.link}>
              Don't have an account?{' '}
              {/* <span className={styles.registerText}>Register</span> */}
            </Link>
          </p>
        </div>
        <div className={styles.imageSection}>
          <img
            src="/login-illustration.png"
            alt="Login"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
