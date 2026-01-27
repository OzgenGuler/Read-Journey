import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AddReading from '../components/AddReading/AddReading';
import Diary from '../components/Diary/Diary';
import Statistics from '../components/Statistics/Statistics';
import FinishedModal from '../components/FinishedModal/FinishedModal';

export default function Reading() {
  const { diary, stats } = useSelector(state => state.reading);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (stats?.progress === 100) {
      setFinished(true);
    }
  }, [stats]);

  return (
    <div>
      <h1>Reading</h1>

      <AddReading bookId="ACTIVE_BOOK_ID" />

      <Diary diary={diary} bookId="ACTIVE_BOOK_ID" />

      <Statistics stats={stats} />

      {finished && <FinishedModal onClose={() => setFinished(false)} />}
    </div>
  );
}
