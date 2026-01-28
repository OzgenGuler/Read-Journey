// src/components/Books/BooksList/BooksList.jsx
import BookCard from "../BookCard/BookCard";
import styles from "./BooksList.module.scss";

const BooksList = ({ books, onDelete, showDeleteBtn = false }) => {
  if (!books || books.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No books found</p>
      </div>
    );
  }

  return (
    <ul className={styles.list}>
      {books.map((book) => (
        <li key={book._id} className={styles.item}>
          <BookCard
            book={book}
            onDelete={onDelete}
            showDeleteBtn={showDeleteBtn}
          />
        </li>
      ))}
    </ul>
  );
};

export default BooksList;
