import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBookAsync } from '../../redux/books/books';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(deleteBookAsync({ id }));
  };

  return (
    <div>
      <li key={id}>
        <h2>{title}</h2>
        <p>{author}</p>
        <button type="button">Comments</button>
        <button type="button" onClick={handleRemoveClick}>Remove</button>
        <button type="button">Edit</button>
        <p>

          % Completed
        </p>
        <p>Current Chapter</p>

        <button type="button">Update progress</button>
      </li>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
