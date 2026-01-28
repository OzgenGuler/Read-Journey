// src/redux/books/booksSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  getRecommendedBooks,
  getOwnBooks,
  addBook,
  deleteBook,
  getBookById,
} from "./booksOperations";

const initialState = {
  recommended: [],
  ownBooks: [],
  currentBook: null,
  isLoading: false,
  error: null,
  filters: {
    title: "",
    author: "",
    status: "unread", // unread, in-progress, done
  },
  pagination: {
    page: 1,
    limit: 10,
    totalPages: 1,
  },
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = {
        title: "",
        author: "",
        status: "unread",
      };
    },
    setPage: (state, action) => {
      state.pagination.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get recommended books
      .addCase(getRecommendedBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getRecommendedBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recommended = action.payload.results;
        state.pagination.totalPages = action.payload.totalPages;
      })
      .addCase(getRecommendedBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Get own books
      .addCase(getOwnBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getOwnBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ownBooks = action.payload;
      })
      .addCase(getOwnBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Add book
      .addCase(addBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ownBooks.push(action.payload);
      })
      .addCase(addBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Delete book
      .addCase(deleteBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ownBooks = state.ownBooks.filter(
          (book) => book._id !== action.payload,
        );
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Get book by ID
      .addCase(getBookById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBookById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentBook = action.payload;
      })
      .addCase(getBookById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilters, clearFilters, setPage } = booksSlice.actions;
export default booksSlice.reducer;
