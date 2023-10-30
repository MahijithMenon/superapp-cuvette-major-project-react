import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Category from './pages/Category';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/category" element={<Category />}></Route>
      </Routes>
    </>
  );
}

export default App;
