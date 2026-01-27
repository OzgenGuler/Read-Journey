import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://readjourney.b.goit.study/api',
});

export const setToken = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  delete api.defaults.headers.common.Authorization;
};

export const registerUser = async credentials => {
  const { data } = await api.post('/users/register', credentials);
  return data;
};

export const loginUser = async credentials => {
  const { data } = await api.post('/users/login', credentials);
  return data;
};
export default api;
