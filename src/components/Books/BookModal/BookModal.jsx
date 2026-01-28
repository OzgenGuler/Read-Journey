// src/components/Books/BookModal/BookModal.jsx
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addBook } from "../../../redux/books/booksOperations";
import Modal from "../../Modal/Modal";
import styles from "./BookModal.module.scss";

const BookModal = ({ book, onClose, showDeleteBtn = false }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToLibrary = async () => {
    try {
      await dispatch(addBook({ id: book._id })).unwrap();
      toast.success("Book added to library!");
      onClose();
    } catch (error) {
      toast.error(error || "Failed to add book");
    }
  };

  const handleStartReading = () => {
    navigate(`/reading/${book._id}`);
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <div className={styles.modal}>
        <div className={styles.imageWrapper}>
          <img
            src={book.imageUrl || "/placeholder-book.jpg"}
            alt={book.title}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{book.title}</h2>
          <p className={styles.author}>{book.author}</p>
          <p className={styles.pages}>{book.totalPages} pages</p>

          {showDeleteBtn ? (
            <button onClick={handleStartReading} className={styles.actionBtn}>
              Start reading
            </button>
          ) : (
            <button onClick={handleAddToLibrary} className={styles.actionBtn}>
              Add to library
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default BookModal;
