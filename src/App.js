import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import { BookProvider }  from './context/BookContext';

function App() {
  return (
    <BookProvider>
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
        </Routes>
      </div>
    </BookProvider>
  );
}

export default App;
