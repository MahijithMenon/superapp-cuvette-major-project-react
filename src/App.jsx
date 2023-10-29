import './App.css';
import { Routes, Link, Route } from 'react-router-dom';
import Register from './pages/Register';
import Category from './pages/Category';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/category" element={<Category />}></Route>
      </Routes>
    </>
  );
}

export default App;
