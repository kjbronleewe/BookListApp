import { useContext } from "react";
import BookContext from "../context/BookContext";
import Book from "./Book";

export default function BookList() {
  const { books } = useContext(BookContext);

  if (!books || books.length === 0) {
    return <p>No book are in the list currently. Please add some books.</p>;
  }

  return (
    <div>
      <h3 style={{ padding: "20px" }} className="title">
        Bookshelf
      </h3>
      <div className="container">
        {books.map((item) => (
          <Book key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
