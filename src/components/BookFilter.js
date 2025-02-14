import { useState } from 'react';

const BookFilter = ({ books }) => {
  const [completedFilter, setCompletedFilter] = useState('All');

  const filteredBooks =
    completedFilter === 'All'
      ? books
      : books.filter((book) =>
          completedFilter === 'yes' ? book.completed : !book.completed
        );

  console.log(filteredBooks);
  return (
    <div>
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
      <button className="btn btn-dark" onClick={() => setCompletedFilter('no')}>
        Not Completed Books
      </button>
    </div>
  );
};

export default BookFilter;
