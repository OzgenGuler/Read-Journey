import axios from './axios';

export const fetchMyLibrary = async () => {
  const { data } = await axios.get('/books/own');
  return data;
};

export const addBookToLibrary = async book => {
  const { data } = await axios.post('/books/add', book);
  return data;
};

export const removeBookFromLibrary = async bookId => {
  await axios.delete(`/books/remove/${bookId}`);
};
