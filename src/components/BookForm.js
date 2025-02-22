import { useState, useContext } from 'react';
import BookContext from '../context/BookContext';
import Card from './shared/Card';
import { Button } from 'reactstrap';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const { addBook } = useContext(BookContext);

  const handleTextChange = (e, field) => {
    if (title === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    if (field === 'title') {
      setTitle(e.target.value);
    } else if (field === 'author') {
      setAuthor(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
    };
    addBook(newBook);

    setTitle('');
    setAuthor('');
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Add a book to your shelf</h2>
        <div className="input-group" >
          <input
            onChange={(e) => handleTextChange(e, 'title')}
            type="text"
            placeholder="Title of book"
            value={title}
          />
          <input
            onChange={(e) => handleTextChange(e, 'author')}
            type="text"
            placeholder="Author of book"
            value={author}
          />
          <Button type="submit" version="primary" isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default BookForm;
