import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addBook } from '../../features/library/librarySlice';

export default function AddBook() {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    dispatch(addBook(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Title" {...register('title', { required: true })} />
      <input placeholder="Author" {...register('author', { required: true })} />
      <input
        placeholder="Pages"
        type="number"
        {...register('pages', { required: true })}
      />
      <button type="submit">Add book</button>
    </form>
  );
}
