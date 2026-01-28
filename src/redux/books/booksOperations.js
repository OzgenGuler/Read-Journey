// src/redux/books/booksOperations.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/readJourneyApi";

// Get recommended books
export const getRecommendedBooks = createAsyncThunk(
  "books/getRecommended",
  async (
    { page = 1, limit = 10, title = "", author = "" },
    { rejectWithValue },
  ) => {
    try {
      const params = new URLSearchParams();
      params.append("page", page);
      params.append("limit", limit);
      if (title) params.append("title", title);
      if (author) params.append("author", author);

      const { data } = await api.get(`/books/recommend?${params.toString()}`);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch books",
      );
    }
  },
);

// Get own books (library)
export const getOwnBooks = createAsyncThunk(
  "books/getOwn",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/books/own");
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch library",
      );
    }
  },
);

// Add book to library
export const addBook = createAsyncThunk(
  "books/add",
  async (bookData, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/books/add", bookData);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to add book",
      );
    }
  },
);

// Delete book from library
export const deleteBook = createAsyncThunk(
  "books/delete",
  async (bookId, { rejectWithValue }) => {
    try {
      await api.delete(`/books/remove/${bookId}`);
      return bookId;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete book",
      );
    }
  },
);

// Get book by ID
export const getBookById = createAsyncThunk(
  "books/getById",
  async (bookId, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`/books/${bookId}`);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch book details",
      );
    }
  },
);
