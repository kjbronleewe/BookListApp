import { useContext } from "react";
import BookForm from "./BookForm";
import BookContext from "../context/BookContext";

const AddBook = () => {
  const { books, setBooks } = useContext(BookContext);

  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
  };

  return (
    <>
      <h3 style={{ padding: "20px" }} className="title">
        Add a book
      </h3>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </>
  );
};

export default AddBook;
