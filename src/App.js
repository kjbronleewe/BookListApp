import { Routes, Route, Router } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import { BookProvider }  from './context/BookContext';

function App() {
  return (
    <BookProvider>
      <Router>
        <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<BookList />}
          />
          <Route
            path="/add"
            element={<AddBook />}
          />
          <Route
            path="/edit/:id"
            element={<EditBook books={books} setBooks={setBooks} />}
          />
        </Routes>
      </div>
      </Router>
    </BookProvider>
  );
}

export default App;
