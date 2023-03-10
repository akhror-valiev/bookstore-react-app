import axios from 'axios';

const ADD_BOOK = 'react-bookstore/books/ADD_BOOK';
const DELETE_BOOK = 'react-bookstore/books/DELETE_BOOK';
const BOOK_FAILURE = 'react-bookstore/books/BOOK_FAILURE';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const keys = 'nCNdsVJm2y1eTVvc8LoB';

const books = [];

const BookReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const books = Object.entries(action.payload);
      return books.map((book) => ({
        id: book[0],
        ...book[1][0],
      }));
    }
    case DELETE_BOOK:
      return [...state.filter((book) => (book.id !== action.payload))];
    default:
      return state;
  }
};

export const addBook = (book) => ({ type: ADD_BOOK, payload: book });

export const fetchBooks = () => async (dispatch) => {
  await axios.get(`${url}/${keys}/books`).then(
    (response) => dispatch(addBook(response.data)),
    (err) => dispatch({ type: BOOK_FAILURE, err }),
  );
};

export const deleteBook = (id) => async (dispatch) => {
  await axios
    .delete(`${url}/${keys}/books/${id}`)
    .then(() => dispatch(fetchBooks())); return { type: DELETE_BOOK, payload: id };
};

export const postBook = (book) => async (dispatch) => {
  await axios
    .post(`${url}/${keys}/books`, book)
    .then(() => dispatch(fetchBooks()));
};

export default BookReducer;
