import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';

export default configureStore({
  reducer: {
    books: bookReducer,
  },
});
