// src/components/Auth/RegisterForm/RegisterForm.jsx
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register as registerUser } from '../../../redux/auth/authOperations';
import { registerSchema } from '../../../utils/validationSchemas';
import styles from './RegisterForm.module.scss';
import { useState } from 'react';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector(state => state.auth);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'onBlur',
  });

  const onSubmit = async data => {
    try {
      const result = await dispatch(registerUser(data)).unwrap();
      toast.success('Registration successful!');
      navigate('/recommended');
    } catch (error) {
      toast.error(error || 'Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formGroup}>
        <input
          id="name"
          type="text"
          placeholder="Ilona Ratushniak" // Bu artık görünmez ama HTML5 için gerekli
          {...register('name')}
          className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
        />
        <label htmlFor="name" className={styles.label}>
          Name:
        </label>
        {errors.name && (
          <span className={styles.error}>{errors.name.message}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <input
          id="email"
          type="email"
          placeholder="Your@email.com"
          {...register('email')}
          className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
        />
        <label htmlFor="email" className={styles.label}>
          Mail:
        </label>
        {errors.email && (
          <span className={styles.error}>{errors.email.message}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Yourpasswordhere"
          {...register('password')}
          className={`${styles.input} ${styles.inputWithIcon} ${errors.password ? styles.inputError : ''}`}
        />
        <label htmlFor="password" className={styles.label}>
          Password:
        </label>
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className={styles.eyeButton}
        >
          <svg className={styles.eyeIcon}>
            <use
              href={`sprite.svg#acikgoz${showPassword ? 'kapaligoz' : ''}`}
            ></use>
          </svg>
        </button>
        {errors.password && (
          <>
            <svg className={styles.errorIcon}>
              <use href={`sprite.svg#kirmiziünlem`}></use>
            </svg>
            <span className={styles.error}>{errors.password.message}</span>
          </>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={styles.submitButton}
      >
        {isLoading ? 'Registering...' : 'Registration'}
      </button>
    </form>
  );
};

export default RegisterForm;
