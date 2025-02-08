import BookForm from './BookForm';
import { useNavigate } from 'react-router-dom';

const AddBook = ({ books, setBooks }) => {
  const navigate = useNavigate();

  const handleOnSubmit = (book) => {
    setBooks((prevBooks) => [book, ...prevBooks]);
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
