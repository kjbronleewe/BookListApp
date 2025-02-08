import { Button, Card } from "reactstrap";

const Book = ({
  id,
  title,
  author,
  rating,
  completed,
  date,
  handleRemoveBook,
}) => {
  return (
    <Card style={{ width: '18rem' }} className="book">
      <Card.Body>
        <Card.Title className="book-title">{title}</Card.Title>
        <div className="book-details">
          <div>Author: {author}</div>
          <div>Rating: {rating} </div>
          <div>Completed: {completed} </div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        {/* <Button variant="primary">Edit</Button>{' '} */}
        <Button variant="danger" onClick={() => handleRemoveBook(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Book;
