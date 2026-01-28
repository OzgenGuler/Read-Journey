// src/components/AddBook/AddBook.jsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addBook } from "../../redux/books/booksOperations";
import { addBookSchema } from "../../utils/validationSchemas";
import Modal from "../Modal/Modal";
import styles from "./AddBook.module.scss";

const AddBook = () => {
  const dispatch = useDispatch();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(addBookSchema),
  });

  const onSubmit = async (data) => {
    try {
      await dispatch(addBook(data)).unwrap();
      setShowSuccessModal(true);
      reset();
    } catch (error) {
      toast.error(error || "Failed to add book");
    }
  };

  return (
    <>
      <div className={styles.addBook}>
        <h3 className={styles.title}>Create your library:</h3>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.formGroup}>
            <input
              type="text"
              placeholder="Book title"
              {...register("title")}
              className={`${styles.input} ${errors.title ? styles.inputError : ""}`}
            />
            {errors.title && (
              <span className={styles.error}>{errors.title.message}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <input
              type="text"
              placeholder="Author"
              {...register("author")}
              className={`${styles.input} ${errors.author ? styles.inputError : ""}`}
            />
            {errors.author && (
              <span className={styles.error}>{errors.author.message}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <input
              type="number"
              placeholder="Number of pages"
              {...register("totalPages")}
              className={`${styles.input} ${errors.totalPages ? styles.inputError : ""}`}
            />
            {errors.totalPages && (
              <span className={styles.error}>{errors.totalPages.message}</span>
            )}
          </div>

          <button type="submit" className={styles.submitBtn}>
            Add book
          </button>
        </form>
      </div>

      {showSuccessModal && (
        <Modal onClose={() => setShowSuccessModal(false)}>
          <div className={styles.successModal}>
            <svg className={styles.successIcon}>
              <use href="/sprite.svg#icon-success"></use>
            </svg>
            <h3>Good job!</h3>
            <p>Your book is now in the library!</p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default AddBook;
