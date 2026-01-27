import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRecommendedBooks } from '../../api/booksApi';

export const getRecommended = createAsyncThunk(
  'books/getRecommended',
  async ({ page }, thunkAPI) => {
    try {
      return await fetchRecommendedBooks(page);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    items: [],
    page: 1,
    totalPages: 1,
    isLoading: false,
    error: null,
  },
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getRecommended.pending, state => {
        state.isLoading = true;
      })
      .addCase(getRecommended.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.results;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getRecommended.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setPage } = booksSlice.actions;
export default booksSlice.reducer;
