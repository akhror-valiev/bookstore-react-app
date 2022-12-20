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
  },

});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
