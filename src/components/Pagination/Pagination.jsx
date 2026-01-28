// src/components/Pagination/Pagination.jsx
import styles from "./Pagination.module.scss";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirstPage}
        className={`${styles.btn} ${isFirstPage ? styles.disabled : ""}`}
      >
        <svg className={styles.icon}>
          <use href="/sprite.svg#icon-arrow-left"></use>
        </svg>
      </button>

      <span className={styles.pageInfo}>
        {currentPage} / {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLastPage}
        className={`${styles.btn} ${isLastPage ? styles.disabled : ""}`}
      >
        <svg className={styles.icon}>
          <use href="/sprite.svg#icon-arrow-right"></use>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
