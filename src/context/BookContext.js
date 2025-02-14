import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { v4 as uuidv4 } from 'uuid';
 

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [books, setBooks] = useLocalStorage('books', []);

  const value = { books, setBooks };

  return (
    <BookContext.Provider value={(value)}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
