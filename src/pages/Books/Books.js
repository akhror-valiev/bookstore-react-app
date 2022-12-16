import React from 'react';
import Book from '../../components/Book/Book';

const books = [{
  id: 1,
  typeOf: 'action',
  bookTitle: 'first-book',
  author: 'person1',
  status: '10%',
  chapter: 15,
},
{
  id: 1,
  typeOf: 'fiction',
  bookTitle: 'second-book',
  author: 'person2',
  status: '50%',
  chapter: 2,

}];

const Books = () => (
  <div className="container">
    {books.map(({
      id, typeOf, bookTitle, author, status, chapter,
    }) => (
      <Book
        key={id}
        typeOf={typeOf}
        bookTitle={bookTitle}
        author={author}
        status={status}
        chapter={chapter}
      />
    ))}

  </div>
);

export default Books;
