// src/components/Auth/RegisterForm/RegisterForm.jsx
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register as registerUser } from "../../../redux/auth/authOperations";
import { registerSchema } from "../../../utils/validationSchemas";
import styles from "./RegisterForm.module.scss";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    try {
      const result = await dispatch(registerUser(data)).unwrap();
      toast.success("Registration successful!");
      navigate("/recommended");
    } catch (error) {
      toast.error(error || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Name:
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          {...register("name")}
          className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
        />
        {errors.name && (
          <span className={styles.error}>{errors.name.message}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Mail:
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
        />
        {errors.email && (
          <span className={styles.error}>{errors.email.message}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="password" className={styles.label}>
          Password:
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          {...register("password")}
          className={`${styles.input} ${errors.password ? styles.inputError : ""}`}
        />
        {errors.password && (
          <span className={styles.error}>{errors.password.message}</span>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={styles.submitButton}
      >
        {isLoading ? "Registering..." : "Registration"}
      </button>
    </form>
  );
};

export default RegisterForm;
