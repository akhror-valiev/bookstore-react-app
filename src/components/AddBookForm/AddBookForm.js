import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAsync } from '../../redux/books/books';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (title === '' || author === '') return;
    const newBook = {
      title,
      author,
    };
    dispatch(addBookAsync(newBook));
    setAuthor('');
    setTitle('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Book Title" />
      <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text" placeholder="Author" />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
