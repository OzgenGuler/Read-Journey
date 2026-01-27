export default function BookCard({ book }) {
  return (
    <div style={styles.card}>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>📄 {book.pages} pages</p>
      <button>Add to library</button>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #333',
    padding: '16px',
    borderRadius: '8px',
  },
};
