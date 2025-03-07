import { createContext, useState, useEffect } from "react";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await fetch(`/books?_sort=id&_order=desc`);
    const data = await response.json();

    setBooks(data);
  };

  const addBook = async (newBook) => {
    const response = await fetch("/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    });

    const data = await response.json();

    setBooks([data, ...books]);
  };

  const deleteBook = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`/books/${id}`, { method: "DELETE" });

      setBooks(books.filter((item) => item.id !== id));
    }
  };

  const updateBook = async (id, updItem) => {
    const response = await fetch(`/book/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();

    setBooks(
      books.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  return (
    <BookContext.Provider
      value={{
        books,
        deleteBook,
        addBook,
        updateBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
