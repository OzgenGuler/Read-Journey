// src/components/Books/BookCard/BookCard.jsx
import { useState } from "react";
import BookModal from "../BookModal/BookModal";
import styles from "./BookCard.module.scss";

const BookCard = ({ book, onDelete, showDeleteBtn = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (e) => {
    e.stopPropagation();
    if (onDelete) onDelete(book._id);
  };

  return (
    <>
      <div className={styles.card} onClick={() => setIsModalOpen(true)}>
        <div className={styles.imageWrapper}>
          <img
            src={book.imageUrl || "/placeholder-book.jpg"}
            alt={book.title}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{book.title}</h3>
          <p className={styles.author}>{book.author}</p>
        </div>
        {showDeleteBtn && (
          <button onClick={handleDelete} className={styles.deleteBtn}>
            <svg className={styles.deleteIcon}>
              <use href="/sprite.svg#icon-trash"></use>
            </svg>
          </button>
        )}
      </div>

      {isModalOpen && (
        <BookModal
          book={book}
          onClose={() => setIsModalOpen(false)}
          showDeleteBtn={showDeleteBtn}
        />
      )}
    </>
  );
};

export default BookCard;
