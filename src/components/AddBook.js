import { useContext } from 'react';
import BookForm from './BookForm';
import { useNavigate } from 'react-router-dom';
import BookContext from '../context/BookContext';

const AddBook = () => {
  const { books, setBooks } = useContext(BookContext)
  const navigate = useNavigate();

  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    navigate('/');
  };

  return (
    <>
      <h3 style={{ padding: '20px' }}>Add a Book</h3>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </>
  );
};

export default AddBook;
