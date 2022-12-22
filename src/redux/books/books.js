import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: [
    {
      id: 1,
      title: 'first-book',
      author: 'person1',

    },
  ],

  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: Date.now(),
        title: action.payload.title,
        author: action.payload.author,
      };
      state.push(newBook);
    },
    togleComplete: (state, action) => {
      const index = state.findIndex((book) => book.id === action.payload.id);

      // eslint-disable-next-line no-param-reassign
      state[index].completed = action.payload.completed;
    },
    removeBook: (state, action) => state.filter((book) => book.id !== action.payload.id),
  },

});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
