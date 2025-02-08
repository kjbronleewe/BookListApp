import { useState } from 'react';
import BookDetails from './BookDetails';
import { TEST_BOOKS } from '../TEST_BOOKS';
import BookFilter from './BookFilter';

export default function BookList() {
  const [booksList, setBooksList] = useState(TEST_BOOKS);
  const [completedFilter, setCompletedFilter] = useState('All');

  const filteredBooks =
    completedFilter === 'All'
      ? booksList
      : booksList.filter((book) => book.completed === completedFilter);

  console.log(filteredBooks);

  return (
    <div>
      <h3 style={{ padding: '20px' }}>List of Books</h3>
      <BookFilter setCompletedFilter={setCompletedFilter} />
      <div className="container">
        {filteredBooks.map((b) => (
          <BookDetails book={b} key={b.id} />
        ))}
      </div>
    </div>
  );
}
