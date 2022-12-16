import React from 'react';

const Book = ({
  // eslint-disable-next-line react/prop-types
  id, typeOf, title, author, status, chapter,
}) => (
  <div>
    <li key={id}>
      <p>{typeOf}</p>
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button">Comments</button>
      <button type="button">Edit</button>
      <p>
        {status}
        {' '}
        % Completed
      </p>
      <p>Current Chapter</p>
      <p>{chapter}</p>
      <button type="button">Update progress</button>
    </li>
  </div>
);

export default Book;
