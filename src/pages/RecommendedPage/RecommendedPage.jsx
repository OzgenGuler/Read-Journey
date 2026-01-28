// src/pages/RecommendedPage/RecommendedPage.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRecommendedBooks } from "../../redux/books/booksOperations";
import { setPage } from "../../redux/books/booksSlice";
import Dashboard from "../../components/Dashboard/Dashboard";
import Filters from "../../components/Filters/Filters";
import Quote from "../../components/Quote/Quote";
import BooksList from "../../components/Books/BooksList/BooksList";
import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";
import styles from "./RecommendedPage.module.scss";

const RecommendedPage = () => {
  const dispatch = useDispatch();
  const { recommended, isLoading, pagination, filters } = useSelector(
    (state) => state.books,
  );

  useEffect(() => {
    dispatch(
      getRecommendedBooks({
        page: pagination.page,
        limit: pagination.limit,
        title: filters.title,
        author: filters.author,
      }),
    );
  }, [
    dispatch,
    pagination.page,
    pagination.limit,
    filters.title,
    filters.author,
  ]);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return (
    <div className={styles.recommendedPage}>
      <div className={styles.container}>
        <Dashboard>
          <Filters />

          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Start your workout</h3>
            <p className={styles.infoText}>
              Create your own library and add books to start reading.
            </p>
            <Link to="/library" className={styles.infoLink}>
              My library →
            </Link>
          </div>

          <Quote />
        </Dashboard>

        <div className={styles.content}>
          <h2 className={styles.pageTitle}>Recommended</h2>

          {isLoading ? (
            <Loader />
          ) : (
            <>
              <BooksList books={recommended} />

              {pagination.totalPages > 1 && (
                <Pagination
                  currentPage={pagination.page}
                  totalPages={pagination.totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecommendedPage;
