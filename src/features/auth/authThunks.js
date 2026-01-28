import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, setToken, clearToken } from '../../api/axios';
// import api from '../../api/axios';

export const register = createAsyncThunk(
  'auth/register',
  async (data, thunkAPI) => {
    try {
      const res = await api.post('/users/signup', data);
      setToken(res.data.token);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const res = await api.post('/users/signin', data);
    setToken(res.data.token);
    return res.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data.message);
  }
});

export const signout = createAsyncThunk('auth/signout', async () => {
  await api.post('/users/signout');
  clearToken();
});

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import api from '../../../src/api/axios';

// export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     await api.post('/auth/logout');
//   } catch (error) {
//     // backend hata verse bile devam
//   }
//   return true;
// });
// export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
//   try {
//     const response = await api.post('/auth/login', data);
//     return response.data;
//   } catch (e) {
//     return thunkAPI.rejectWithValue(e.response.data.message);
//   }
// });

// export const register = createAsyncThunk(
//   'auth/register',
//   async (data, thunkAPI) => {
//     try {
//       const response = await api.post('/auth/register', data);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.response.data.message);
//     }
//   }
// );
