import { useContext } from "react";
import { Button, Card, CardBody, CardTitle } from "reactstrap";
import BookContext from "../context/BookContext";

const Book = ({ item }) => {
  const { deleteBook } = useContext(BookContext);

  return (
    <Card
      style={{
        width: "20rem",
        borderRadius: "15px",
        backgroundColor: "#E6CAAF",
      }}
      className="custom-card"
    >
      <CardBody>
        <CardTitle className="book-title">{item.title}</CardTitle>
        <div className="book-details">
          <div>Author: {item.author}</div>
          <div>{item.notesAboutBook}</div>
        </div>
        <Button
          color="danger"
          size="sm"
          outline
          onClick={() => deleteBook(item.id)}
        >
          Delete
        </Button>
      </CardBody>
    </Card>
  );
};

export default Book;
