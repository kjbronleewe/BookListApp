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
      <h2>List of Books</h2>
      <button
        className="btn btn-primary"
        onClick={() => setCompletedFilter('All')}
      >
        All
      </button>
      <button
        className="btn btn-primary"
        onClick={() => setCompletedFilter('yes')}
      >
        Completed
      </button>
      <button
        className="btn btn-primary"
        onClick={() => setCompletedFilter('no')}
      >
        Not Completed
      </button>
      {filteredBooks.map((b) => (
        <BookDetails book={b} />
      ))}
    </div>
  );
}
