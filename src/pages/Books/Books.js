import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../../components/Book/Book';
import { getBooksAsync } from '../../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const booksInfo = Object.keys(books);

  useEffect(() => {
    dispatch(getBooksAsync());
  }, [dispatch]);

  return (
    <div className="container">
      {
        booksInfo.map((book) => (

          <Book
            id={book.id}
            key={book.id}
            title={books[book][0].title}
            author={books[book][0].author}
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
