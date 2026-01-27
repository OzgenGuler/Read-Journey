import { useDispatch } from 'react-redux';
import { removeDiary } from '../../features/reading/readingSlice';

export default function Diary({ diary, bookId }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Diary</h3>
      {diary.map(entry => (
        <div key={entry._id} style={styles.entry}>
          <p>Date: {entry.date}</p>
          <p>Pages: {entry.pages}</p>
          <p>Time: {entry.time} min</p>
          <button
            onClick={() =>
              dispatch(removeDiary({ bookId, entryId: entry._id }))
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  entry: {
    border: '1px solid #666',
    padding: '10px',
    marginBottom: '10px',
  },
};
