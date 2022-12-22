/* eslint-disable react/button-has-type */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

// eslint-disable-next-line react/prop-types
const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    // eslint-disable-next-line object-shorthand
    dispatch(removeBook({ id: id }));
  };

  return (
    <div>
      <li key={id}>
        <h2>{title}</h2>
        <p>{author}</p>
        <button type="button">Comments</button>
        <button onClick={handleRemoveClick}>Remove</button>
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

export default Book;
