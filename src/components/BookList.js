import { useContext, useState } from 'react';
import BookFilter from './BookFilter';
import { BookContext } from '../context/BookContext';
import Book from './Book';

export default function BookList() {
    const { books, setBooks } = useContext(BookContext)

    const handleRemoveBook = (id) => {
      setBooks(books.filter((book) => book.id !== id));
    };

  return (
    <div>
      <h3 style={{ padding: '20px' }}>List of Books</h3>
      <div className="container">
        {(books) ? books.map((book) => (
          <Book {...book} key={book.id} handleRemoveBook={handleRemoveBook} />
        )) : (
          <p className='noData'>No books avaliable, please add some books!</p>
        )}
      </div>
    </div>
  );
}
