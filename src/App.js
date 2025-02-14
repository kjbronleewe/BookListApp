import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import BookProvider from './context/BookContext';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [books, setBooks] = useLocalStorage('books', []);

  return (
    <BookProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<BookList books={books} setBooks={setBooks} />}
          />
          <Route
            path="/add"
            element={<AddBook books={books} setBooks={setBooks} />}
          />
          <Route
            path="/edit/:id"
            element={<EditBook books={books} setBooks={setBooks} />}
          />
        </Routes>
      </div>
    </BookProvider>
  );
}

export default App;
