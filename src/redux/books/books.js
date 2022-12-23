import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const getBooksAsync = createAsyncThunk('books/getBooksAsync',
  // eslint-disable-next-line consistent-return
  async () => {
    const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/nCNdsVJm2y1eTVvc8LoB/books');
    if (response.ok) {
      const books = await response.json();
      return { books };
    }
  });

export const addBookAsync = createAsyncThunk('books/addBookAsync',
  // eslint-disable-next-line consistent-return
  async (payload) => {
    const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/nCNdsVJm2y1eTVvc8LoB/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: payload.title, author: payload.author }),
    });
    if (response.ok) {
      const book = await response.json();
      return { book };
    }
  });

export const deleteBookAsync = createAsyncThunk(
  'books/deleteBookAsync',

  // eslint-disable-next-line consistent-return
  async (payload) => {
    const response = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/nCNdsVJm2y1eTVvc8LoB/books/${payload.id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      return { id: payload.id };
    }
  },
);

export const bookSlice = createSlice({
  name: 'books',
  initialState: [],

  reducers: {
    addBook: (state, action) => {
      const book = {
        id: nanoid(),
        title: action.payload.title,
        author: action.payload.author,
      };
      state.push(book);
    },
    removeBook: (state, action) => state.filter((book) => book.id !== action.payload.id),
  },

  extraReducers: {
    [getBooksAsync.fulfilled]: (state, action) => action.payload.books,
    [addBookAsync.fulfilled]: (state, action) => {
      state.push(action.payload.book);
    },
    // eslint-disable-next-line max-len
    [deleteBookAsync.fulfilled]: (state, action) => state.filter((book) => book.id !== action.payload.id),
  },

});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
