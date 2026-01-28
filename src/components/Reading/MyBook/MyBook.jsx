// src/pages/ReadingPage/ReadingPage.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBookById } from "../../redux/books/booksOperations";
import Dashboard from "../../components/Dashboard/Dashboard";
import AddReading from "../../components/Reading/AddReading/AddReading";
import Diary from "../../components/Reading/Diary/Diary";
import Statistics from "../../components/Reading/Statistics/Statistics";
import MyBook from "../../components/Reading/MyBook/MyBook";
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
          <MyBook book={currentBook} />
        </div>
      </div>
    </div>
  );
};

export default ReadingPage;
