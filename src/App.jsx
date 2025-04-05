import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import SignUp from './Components/SignUp';
import Newsboard from './Components/Newsboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [category, setCategory] = useState("general");

  return (
    <Router>
      <NavBar setCategory={setCategory} />
      <Routes>
        <Route path="/" element={<Newsboard category={category} />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;


