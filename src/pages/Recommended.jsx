import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecommended, setPage } from '../features/books/booksSlice';
import BookCard from '../components/BookCard/BookCard';
import Pagination from '../components/Pagination/Pagination';

export default function Recommended() {
  const dispatch = useDispatch();
  const { items, page, totalPages, isLoading } = useSelector(
    state => state.books
  );

  useEffect(() => {
    dispatch(getRecommended({ page }));
  }, [dispatch, page]);

  return (
    <div>
      <h1>Recommended</h1>

      {isLoading && <p>Loading...</p>}

      <div style={styles.grid}>
        {items.map(book => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>

      <Pagination
        page={page}
        totalPages={totalPages}
        onChange={p => dispatch(setPage(p))}
      />
    </div>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '16px',
  },
};
