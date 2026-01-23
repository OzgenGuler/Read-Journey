// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { api, setToken, clearToken } from '../../api/axios';
// import axios from 'axios';

// export const register = createAsyncThunk(
//   'auth/register',
//   async (data, thunkAPI) => {
//     try {
//       const res = await api.post('/users/signup', data);
//       setToken(res.data.token);
//       return res.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.response.data.message);
//     }
//   }
// );

// export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
//   try {
//     const res = await api.post('/users/signin', data);
//     setToken(res.data.token);
//     return res.data;
//   } catch (e) {
//     return thunkAPI.rejectWithValue(e.response.data.message);
//   }
// });

// export const logout = createAsyncThunk('auth/logout', async () => {
//   await api.post('/users/logout');
//   clearToken();
// });
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../services/api';

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
  } catch (error) {
    // backend hata verse bile devam
  }
  return true;
});
