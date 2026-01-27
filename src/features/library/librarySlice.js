import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchMyLibrary,
  addBookToLibrary,
  removeBookFromLibrary,
} from '../../api/libraryApi';

export const getMyLibrary = createAsyncThunk(
  'library/get',
  async (_, thunkAPI) => {
    try {
      return await fetchMyLibrary();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addBook = createAsyncThunk(
  'library/add',
  async (book, thunkAPI) => {
    try {
      return await addBookToLibrary(book);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  'library/delete',
  async (id, thunkAPI) => {
    try {
      await removeBookFromLibrary(id);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const librarySlice = createSlice({
  name: 'library',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getMyLibrary.pending, state => {
        state.isLoading = true;
      })
      .addCase(getMyLibrary.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.items = state.items.filter(book => book._id !== action.payload);
      });
  },
});

export default librarySlice.reducer;
