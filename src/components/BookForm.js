import { useState, useContext } from "react";
import BookContext from "../context/BookContext";
import Card from "./shared/Card";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [notesAboutBook, setNotestAboutBook] = useState("");

  const { addBook } = useContext(BookContext);

  const navigate = useNavigate();

  const handleTextChange = (e, field) => {
    if (field === "title") {
      setTitle(e.target.value);
    } else if (field === "author") {
      setAuthor(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      notesAboutBook,
    };
    addBook(newBook);

    setTitle("");
    setAuthor("");
    navigate("/");
  };

  return (
    <Card>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label
              htmlFor="title"
              className="input"
              style={{ marginLeft: "10px" }}
            >
              Title of book:
              <input
                onChange={(e) => handleTextChange(e, "title")}
                type="text"
                placeholder="Title"
                value={title}
                id="title"
                style={{ marginLeft: "10px", fontStyle: "italic" }}
              />
            </label>
            <label
              htmlFor="author"
              className="input"
              style={{ marginLeft: "10px" }}
            >
              Author of book:
              <input
                onChange={(e) => handleTextChange(e, "author")}
                type="text"
                placeholder="Author"
                value={author}
                id="author"
                style={{ marginLeft: "10px", fontStyle: "italic" }}
              />
            </label>
            <label htmlFor={notesAboutBook}>Notes about book:</label>
            <textarea
              name="notes"
              id={notesAboutBook}
              rows={2}
              cols={20}
              value={notesAboutBook}
              onChange={(e) => setNotestAboutBook(e.target.value)}
            />
            <div>
              <Button type="submit" version="primary" className="submitBtn">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default BookForm;
