// src/redux/reading/readingOperations.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/readJourneyApi";

// Start reading
export const startReading = createAsyncThunk(
  "reading/start",
  async ({ bookId, page }, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/books/reading/start", {
        id: bookId,
        page,
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to start reading",
      );
    }
  },
);

// Stop reading
export const stopReading = createAsyncThunk(
  "reading/stop",
  async ({ bookId, page }, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/books/reading/finish", {
        id: bookId,
        page,
      });
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to stop reading",
      );
    }
  },
);

// Delete reading progress
export const deleteReadingProgress = createAsyncThunk(
  "reading/delete",
  async ({ bookId, readingId }, { rejectWithValue }) => {
    try {
      await api.delete(
        `/books/reading?bookId=${bookId}&readingId=${readingId}`,
      );
      return readingId;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete progress",
      );
    }
  },
);
