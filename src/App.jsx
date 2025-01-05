import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/HeadLineCard';
import SignUp from './Components/SignUp';
import Newsboard from './Components/Newsboard';

function App() {
  const [category, setCategory] = useState("general");
  const [isSignUp, setSignUp] = useState(false);

  const toggleSignUp = () => {
    setSignUp((prev) => !prev);
  };

  return (
    <>
      {isSignUp ? (
        <SignUp />
      ) : (
        <>
          <NavBar setCategory={setCategory}  toggle={toggleSignUp} />
          <Newsboard category={category} />
        </>
      )}
     
    </>
  );
}

export default App;

