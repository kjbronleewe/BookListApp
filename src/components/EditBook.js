import { useContext } from 'react';
import BookForm from './BookForm';
import { useNavigate, useParams } from 'react-router-dom';
import BookContext from '../context/BookContext';

const EditBook = () => {
  const { books, setBooks } = useContext(BookContext);

  const { id } = useParams();
  const navigate = useNavigate();

  const bookToEdit = books.find((book) => book.id === id);

  const handleOnSubmit = (book) => {
    const filteredBook = books.filter((book) => book.id !== id);
    setBooks([book, ...filteredBook]);
    navigate('/');
  };

  return (
    <>
      <h3 style={{ padding: '20px' }}>Add a Book</h3>
      <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
    </>
  );
};

export default EditBook;
