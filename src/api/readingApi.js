import axios from '../api/axios';

export const startReading = async ({ bookId, page }) => {
  const { data } = await axios.post(`/books/${bookId}/reading/start`, {
    page,
  });
  return data;
};

export const stopReading = async ({ bookId, page }) => {
  const { data } = await axios.post(`/books/${bookId}/reading/stop`, {
    page,
  });
  return data;
};

export const deleteDiaryEntry = async ({ bookId, entryId }) => {
  await axios.delete(`/books/${bookId}/reading/${entryId}`);
};
