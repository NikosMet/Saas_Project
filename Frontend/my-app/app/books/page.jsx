import React from 'react';
import BookDetail from './BookDetail';

const BooksPage = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">List of Books</h1>
        <BookDetail/>
    </div>
  );
};

export default BooksPage;
