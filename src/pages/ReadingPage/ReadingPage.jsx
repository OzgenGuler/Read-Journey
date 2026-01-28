// src/pages/ReadingPage/ReadingPage.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBookById } from "../../redux/books/booksOperations";
import Dashboard from "../../components/Dashboard/Dashboard";
import AddReading from "../../components/Reading/AddReading/AddReading";
import Diary from "../../components/Reading/Diary/Diary";
import Statistics from "../../components/Reading/Statistics/Statistics";
import Loader from "../../components/Loader/Loader";
import styles from "./ReadingPage.module.scss";

const ReadingPage = () => {
  const { bookId } = useParams();
  const dispatch = useDispatch();
  const { currentBook, isLoading } = useSelector((state) => state.books);
  const { progress, currentReading } = useSelector((state) => state.reading);
  const [activeTab, setActiveTab] = useState("diary");

  useEffect(() => {
    if (bookId) {
      dispatch(getBookById(bookId));
    }
  }, [dispatch, bookId]);

  if (isLoading || !currentBook) {
    return <Loader />;
  }

  return (
    <div className={styles.readingPage}>
      <div className={styles.container}>
        <Dashboard>
          <AddReading bookId={bookId} totalPages={currentBook.totalPages} />

          <div className={styles.details}>
            <div className={styles.tabs}>
              <button
                onClick={() => setActiveTab("diary")}
                className={`${styles.tab} ${activeTab === "diary" ? styles.active : ""}`}
              >
                Diary
              </button>
              <button
                onClick={() => setActiveTab("statistics")}
                className={`${styles.tab} ${activeTab === "statistics" ? styles.active : ""}`}
              >
                Statistics
              </button>
            </div>

            {activeTab === "diary" ? (
              <Diary progress={progress} bookId={bookId} />
            ) : (
              <Statistics progress={progress} />
            )}
          </div>
        </Dashboard>

        <div className={styles.content}>
          <div className={styles.bookInfo}>
            <img
              src={currentBook.imageUrl || "/placeholder-book.jpg"}
              alt={currentBook.title}
              className={styles.bookImage}
            />
            <div className={styles.bookDetails}>
              <h2 className={styles.title}>{currentBook.title}</h2>
              <p className={styles.author}>{currentBook.author}</p>
              <p className={styles.pages}>{currentBook.totalPages} pages</p>

              {currentReading && (
                <div className={styles.status}>
                  <p className={styles.statusText}>Currently reading...</p>
                  <p className={styles.currentPage}>
                    Page {currentReading.page}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingPage;
