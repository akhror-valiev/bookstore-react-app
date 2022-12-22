import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Book from '../../components/Book/Book';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="container">
      {
        books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}

          />
        ))
      }

    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Books;
