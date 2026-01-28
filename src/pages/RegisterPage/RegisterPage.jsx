// src/pages/RegisterPage/RegisterPage.jsx
import { Link } from 'react-router-dom';
import RegisterForm from '../../components/Auth/RegisterForm/RegisterForm';
import styles from './RegisterPage.module.scss';

const RegisterPage = () => {
  return (
    <div className={styles.registerPage}>
      <div className={styles.container}>
        <div className={styles.formSection}>
          <h1 className={styles.title}>Register</h1>
          <RegisterForm />
          <p className={styles.loginLink}>
            <Link to="/login" className={styles.link}>
              Already have an account?{' '}
            </Link>
          </p>
        </div>
        <div className={styles.imageSection}>
          <img
            src="/register-illustration.png"
            alt="Register"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
