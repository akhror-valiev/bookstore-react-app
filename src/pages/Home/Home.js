import React from 'react';
import AddBookForm from '../../components/AddBookForm/AddBookForm';

import Books from '../Books/Books';

const Home = () => (
  <div className="addbook-container">
    <Books />
    <AddBookForm />

  </div>
);

export default Home;
