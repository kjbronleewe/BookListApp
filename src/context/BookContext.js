import { createContext, useState, useEffect } from 'react';

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([])

useEffect(() => {
  fetchBooks()
}, [])

const fetchBooks = async () => {
  const response = await fetch(
    `http://localhost:5000/feedback?_sort=id&_order=desc`
  )
const data = await response.json()

setBooks(data)
}

const addBook = (newBook) => {
  newBook.id = uuidv4()
  setBooks([newBook, ...books])
}

const deleteBook = (id) => {
  if (window.confirm('Are you sure you want to delete?')) {
    setBooks(books.filter((item) => item.id !== id))
  }
}

  return (
    <BookContext.Provider value={{
      books,
      deleteBook, 
      addBook
    }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContext; 