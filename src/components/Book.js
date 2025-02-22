import { useContext } from 'react';
import { Button, Card, CardBody, CardTitle } from 'reactstrap';
import BookContext from '../context/BookContext';

const Book = ({ item }) => {
  const { deleteBook, editBook } = useContext(BookContext);

  return (
    <Card style={{ width: '18rem' }} className="book">
      <CardBody>
        <CardTitle className="book-title">{item.title}</CardTitle>
        <div className="book-details">
          <div>Author: {item.author}</div>
          <div>Completed: {item.completed} </div>
        </div>
        <Button color="primary" onClick={() => editBook(item)}>
          Edit
        </Button>{' '}
        <Button color="danger" onClick={() => deleteBook(item.id)}>
          Delete
        </Button>
      </CardBody>
    </Card>
  );
};

export default Book;
