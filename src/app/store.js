import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from '../features/auth/authSlice';
import booksReducer from '../features/books/booksSlice';
import libraryReducer from '../features/library/librarySlice';
import readingReducer from '../features/reading/readingSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
};

const booksPersistConfig = {
  key: 'books',
  storage,
};

const libraryPersistConfig = {
  key: 'library',
  storage,
};

const readingPersistConfig = {
  key: 'reading',
  storage,
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    books: persistReducer(booksPersistConfig, booksReducer),
    library: persistReducer(libraryPersistConfig, libraryReducer),
    reading: persistReducer(readingPersistConfig, readingReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
