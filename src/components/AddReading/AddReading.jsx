import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  startBookReading,
  stopBookReading,
} from '../../features/reading/readingSlice';

export default function AddReading({ bookId }) {
  const dispatch = useDispatch();
  const { isReading } = useSelector(state => state.reading);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    if (isReading) {
      dispatch(stopBookReading({ bookId, page: Number(data.page) }));
    } else {
      dispatch(startBookReading({ bookId, page: Number(data.page) }));
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="number"
        placeholder="Page number"
        {...register('page', { required: true })}
      />
      <button type="submit">{isReading ? 'To stop' : 'To start'}</button>
    </form>
  );
}
