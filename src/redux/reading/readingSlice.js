// src/redux/reading/readingSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  startReading,
  stopReading,
  deleteReadingProgress,
} from "./readingOperations";

const initialState = {
  currentReading: null,
  progress: [],
  statistics: null,
  isLoading: false,
  error: null,
};

const readingSlice = createSlice({
  name: "reading",
  initialState,
  reducers: {
    clearCurrentReading: (state) => {
      state.currentReading = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Start reading
      .addCase(startReading.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(startReading.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentReading = action.payload;
      })
      .addCase(startReading.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Stop reading
      .addCase(stopReading.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(stopReading.fulfilled, (state, action) => {
        state.isLoading = false;
        state.progress = action.payload.progress || [];
        state.statistics = action.payload.statistics || null;
        state.currentReading = null;
      })
      .addCase(stopReading.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Delete reading progress
      .addCase(deleteReadingProgress.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteReadingProgress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.progress = state.progress.filter(
          (item) => item._id !== action.payload,
        );
      })
      .addCase(deleteReadingProgress.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCurrentReading } = readingSlice.actions;
export default readingSlice.reducer;
