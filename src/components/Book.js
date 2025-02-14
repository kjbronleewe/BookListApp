import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, CardTitle } from 'reactstrap'

const Book = ({
  id,
  title,
  author,
  rating,
  completed,
  date,
  handleRemoveBook,
}) => {

  const navigate = useNavigate()

  return (
    <Card style={{ width: '18rem' }} className="book">
      <CardBody>
        <CardTitle className="book-title">{title}</CardTitle>
        <div className="book-details">
          <div>Author: {author}</div>
          <div>Rating: {rating} </div>
          <div>Completed: {completed} </div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <Button color="primary" onClick={() => navigate(`/edit/${id}`)}>
          Edit
        </Button>{' '}
        <Button color="danger" onClick={() => handleRemoveBook(id)}>
          Delete
        </Button>
      </CardBody>
    </Card>
  );
};

export default Book;
