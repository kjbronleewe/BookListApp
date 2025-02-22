import { useContext } from 'react';
import BookContext  from '../context/BookContext';
import Book from './Book';

export default function BookList() {
    const { books } = useContext(BookContext)

  return (
    <div>
      <h3 style={{ padding: '20px' }}>List of Books</h3>
      <div className="container">
        {(books) ? books.map((book) => (
          <Book {...book} key={book.id} />
        )) : (
          <p className='noData'>No books avaliable, please add some books!</p>
        )}
      </div>
    </div>
  );
}
