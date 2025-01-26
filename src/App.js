import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/add" element={<AddBook />} />
      </Routes>
    </div>
  );
}

export default App;
