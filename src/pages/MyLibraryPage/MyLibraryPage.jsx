// src/pages/MyLibraryPage/MyLibraryPage.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getOwnBooks, deleteBook } from "../../redux/books/booksOperations";
import Dashboard from "../../components/Dashboard/Dashboard";
import AddBook from "../../components/AddBook/AddBook";
import BooksList from "../../components/Books/BooksList/BooksList";
import Loader from "../../components/Loader/Loader";
import styles from "./MyLibraryPage.module.scss";

const MyLibraryPage = () => {
  const dispatch = useDispatch();
  const { ownBooks, isLoading } = useSelector((state) => state.books);
  const [statusFilter, setStatusFilter] = useState("unread");

  useEffect(() => {
    dispatch(getOwnBooks());
  }, [dispatch]);

  const handleDelete = async (bookId) => {
    try {
      await dispatch(deleteBook(bookId)).unwrap();
      toast.success("Book removed from library");
    } catch (error) {
      toast.error(error || "Failed to delete book");
    }
  };

  const filteredBooks = ownBooks.filter((book) => {
    if (statusFilter === "all") return true;
    return book.status === statusFilter;
  });

  return (
    <div className={styles.libraryPage}>
      <div className={styles.container}>
        <Dashboard>
          <AddBook />

          <div className={styles.recommendedSection}>
            <h3 className={styles.sectionTitle}>Recommended books</h3>
            <p className={styles.sectionText}>
              Discover new books from our recommendations
            </p>
            <Link to="/recommended" className={styles.link}>
              Home →
            </Link>
          </div>
        </Dashboard>

        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.pageTitle}>My library</h2>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className={styles.select}
            >
              <option value="all">All books</option>
              <option value="unread">Unread</option>
              <option value="in-progress">In progress</option>
              <option value="done">Finished</option>
            </select>
          </div>

          {isLoading ? (
            <Loader />
          ) : (
            <BooksList
              books={filteredBooks}
              onDelete={handleDelete}
              showDeleteBtn={true}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MyLibraryPage;
