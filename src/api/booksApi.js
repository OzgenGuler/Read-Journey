import axios from './axios';

export const fetchRecommendedBooks = async (page = 1, limit = 10) => {
  const { data } = await axios.get(
    `/books/recommend?page=${page}&limit=${limit}`
  );
  return data;
};
