// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import booksReducer from "./books/booksSlice";
import readingReducer from "./reading/readingSlice";

// LocalStorage'dan token yükleme
const loadTokenFromStorage = () => {
  try {
    const token = localStorage.getItem("readjourney-token");
    return token || null;
  } catch (error) {
    return null;
  }
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    books: booksReducer,
    reading: readingReducer,
  },
  preloadedState: {
    auth: {
      user: null,
      token: loadTokenFromStorage(),
      isLoggedIn: !!loadTokenFromStorage(),
      isLoading: false,
      error: null,
    },
  },
});

export default store;
