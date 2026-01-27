import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  startReading,
  stopReading,
  deleteDiaryEntry,
} from '../../api/readingApi';

export const startBookReading = createAsyncThunk(
  'reading/start',
  async (payload, thunkAPI) => {
    try {
      return await startReading(payload);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const stopBookReading = createAsyncThunk(
  'reading/stop',
  async (payload, thunkAPI) => {
    try {
      return await stopReading(payload);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeDiary = createAsyncThunk(
  'reading/deleteDiary',
  async (payload, thunkAPI) => {
    try {
      await deleteDiaryEntry(payload);
      return payload.entryId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const readingSlice = createSlice({
  name: 'reading',
  initialState: {
    diary: [],
    stats: null,
    isReading: false,
  },
  extraReducers: builder => {
    builder
      .addCase(startBookReading.fulfilled, (state, action) => {
        state.isReading = true;
        state.diary = action.payload.diary;
      })
      .addCase(stopBookReading.fulfilled, (state, action) => {
        state.isReading = false;
        state.diary = action.payload.diary;
        state.stats = action.payload.statistics;
      })
      .addCase(removeDiary.fulfilled, (state, action) => {
        state.diary = state.diary.filter(entry => entry._id !== action.payload);
      });
  },
});

export default readingSlice.reducer;
