// src/components/Filters/Filters.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecommendedBooks } from "../../redux/books/booksOperations";
import { setFilters, setPage } from "../../redux/books/booksSlice";
import styles from "./Filters.module.scss";

const Filters = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setFilters({ title, author }));
    dispatch(setPage(1));
    dispatch(getRecommendedBooks({ page: 1, limit: 10, title, author }));
  };

  return (
    <div className={styles.filters}>
      <h3 className={styles.title}>Filters</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>
            Book title:
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="author" className={styles.label}>
            The author:
          </label>
          <input
            id="author"
            type="text"
            placeholder="Enter author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className={styles.input}
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
          To apply
        </button>
      </form>
    </div>
  );
};

export default Filters;
