import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: [
    {
      id: 1, title: 'sample',
    },
  ],

  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: Date.now(),
        title: action.payload.title,
      };
      state.push(newBook);
    },
    removeBook: (state, action) => state.filter((book) => book.id !== action.payload.id),
  },

});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
