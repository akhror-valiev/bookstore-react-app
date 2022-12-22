import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../../components/Book/Book';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="container">
      {
        books.map((book) => (
          // eslint-disable-next-line react/jsx-key
          <Book
            id={book.id}
            title={book.title}
            author={book.author}

          />
        ))
      }

    </div>
  );
};

export default Books;
