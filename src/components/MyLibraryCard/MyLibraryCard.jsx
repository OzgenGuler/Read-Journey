import { useDispatch } from 'react-redux';
import { deleteBook } from '../../features/library/librarySlice';

export default function MyLibraryCard({ book }) {
  const dispatch = useDispatch();

  return (
    <div style={styles.card}>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <button onClick={() => dispatch(deleteBook(book._id))}>Delete</button>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #555',
    padding: '12px',
    borderRadius: '8px',
  },
};
