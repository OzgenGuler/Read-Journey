// src/components/Reading/AddReading/AddReading.jsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  startReading,
  stopReading,
} from "../../../redux/reading/readingOperations";
import { readingPageSchema } from "../../../utils/validationSchemas";
import Modal from "../../Modal/Modal";
import styles from "./AddReading.module.scss";

const AddReading = ({ bookId, totalPages }) => {
  const dispatch = useDispatch();
  const { currentReading } = useSelector((state) => state.reading);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const isReading = !!currentReading;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(readingPageSchema),
  });

  const onSubmit = async (data) => {
    const page = parseInt(data.page);

    try {
      if (isReading) {
        // Stop reading
        await dispatch(stopReading({ bookId, page })).unwrap();

        if (page >= totalPages) {
          setShowCompleteModal(true);
        } else {
          toast.success("Reading stopped!");
        }
      } else {
        // Start reading
        await dispatch(startReading({ bookId, page })).unwrap();
        toast.success("Reading started!");
      }
      reset();
    } catch (error) {
      toast.error(error || "Operation failed");
    }
  };

  return (
    <>
      <div className={styles.addReading}>
        <h3 className={styles.title}>
          {isReading ? "Stop page:" : "Start page:"}
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="page" className={styles.label}>
              Page number:
            </label>
            <input
              id="page"
              type="number"
              placeholder="0"
              {...register("page")}
              className={`${styles.input} ${errors.page ? styles.inputError : ""}`}
            />
            {errors.page && (
              <span className={styles.error}>{errors.page.message}</span>
            )}
          </div>

          <button type="submit" className={styles.submitBtn}>
            {isReading ? "To stop" : "To start"}
          </button>
        </form>
      </div>

      {showCompleteModal && (
        <Modal onClose={() => setShowCompleteModal(false)}>
          <div className={styles.completeModal}>
            <svg className={styles.icon}>
              <use href="/sprite.svg#icon-success"></use>
            </svg>
            <h3>Congratulations!</h3>
            <p>You finished the book!</p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default AddReading;
