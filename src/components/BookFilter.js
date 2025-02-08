import React from 'react'

function BookFilter({ setCompletedFilter }) {
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
      <button
        className="btn btn-dark"
        onClick={() => setCompletedFilter('no')}
      >
        Not Completed Books
      </button>
    </div>
  )
}

export default BookFilter