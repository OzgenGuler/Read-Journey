import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyLibrary } from '../features/library/librarySlice';
import AddBook from '../components/AddBook/AddBook';
import MyLibraryCard from '../components/MyLibraryCard/MyLibraryCard';

export default function Library() {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector(state => state.library);

  useEffect(() => {
    dispatch(getMyLibrary());
  }, [dispatch]);

  return (
    <div>
      <h1>My Library</h1>

      <AddBook />

      {isLoading && <p>Loading...</p>}

      <div style={styles.grid}>
        {items.map(book => (
          <MyLibraryCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '16px',
    marginTop: '20px',
  },
};
