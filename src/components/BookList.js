import { useState } from 'react';
import BookDetails from './BookDetails';
import { TEST_BOOKS } from '../TEST_BOOKS';

export default function BookList() {
  const [booksList, setBooksList] = useState(TEST_BOOKS);
  const [completedFilter, setCompletedFilter] = useState('All');

  let filteredBooks;

  if (completedFilter === 'All') {
    filteredBooks = booksList;
  } else {
    filteredBooks = booksList.filter(
      (book) => book.completed === completedFilter
    );
  }
  console.log(filteredBooks);

  return (
    <div>
      <h3 style={{ padding: '20px' }}>List of Books</h3>
      <button
        className="btn btn-dark"
        onClick={() => setCompletedFilter('All')}
      >
        All Books
      </button>
      <button
        className="btn btn-dark"
        onClick={() => setCompletedFilter('yes')}
      >
        Completed Books
      </button>
      <button
        className="btn btn-dark"
        onClick={() => setCompletedFilter('no')}
      >
        Not Completed Books
      </button>
      <div className="container">
        {filteredBooks.map((b) => (
          <BookDetails book={b} />
        ))}
      </div>
    </div>
  );
}