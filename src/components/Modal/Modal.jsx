// src/components/Modal/Modal.jsx
import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeBtn}>
          <svg className={styles.closeIcon}>
            <use href="/sprite.svg#icon-close"></use>
          </svg>
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root"),
  );
};

export default Modal;
