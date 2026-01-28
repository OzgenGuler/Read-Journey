// src/components/Reading/Diary/Diary.jsx
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deleteReadingProgress } from "../../../redux/reading/readingOperations";
import styles from "./Diary.module.scss";

const Diary = ({ progress, bookId }) => {
  const dispatch = useDispatch();

  const handleDelete = async (readingId) => {
    try {
      await dispatch(deleteReadingProgress({ bookId, readingId })).unwrap();
      toast.success("Progress deleted");
    } catch (error) {
      toast.error(error || "Failed to delete");
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB");
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  if (!progress || progress.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No reading history yet</p>
      </div>
    );
  }

  return (
    <div className={styles.diary}>
      <ul className={styles.list}>
        {progress.map((item) => (
          <li key={item._id} className={styles.item}>
            <div className={styles.info}>
              <p className={styles.date}>{formatDate(item.finishReading)}</p>
              <p className={styles.stats}>
                {item.pagesCount} pages | {formatTime(item.speed)} |{" "}
                {item.progress}%
              </p>
            </div>
            <button
              onClick={() => handleDelete(item._id)}
              className={styles.deleteBtn}
            >
              <svg className={styles.icon}>
                <use href="/sprite.svg#icon-trash"></use>
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Diary;
