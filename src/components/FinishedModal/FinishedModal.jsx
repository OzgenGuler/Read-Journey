export default function FinishedModal({ onClose }) {
  return (
    <div style={styles.backdrop} onClick={onClose}>
      <div style={styles.modal} onClick={e => e.stopPropagation()}>
        <h2>🎉 Book finished!</h2>
        <p>You have completed this book.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

const styles = {
  backdrop: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    background: '#fff',
    padding: '24px',
    borderRadius: '12px',
  },
};
