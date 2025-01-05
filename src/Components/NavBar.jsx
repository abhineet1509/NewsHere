
import React, { useState } from 'react';
import './NavBar.css';
import seo from '../assets/seo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ toggle,setCategory }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handle = (event) => {
    event.preventDefault();
    toggle();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">

      <div className="navbar-left">
        <a href="/" className="logo">
          <img src={seo} width={40} alt="SEO Logo" />
        </a>
      </div>

      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="Home">Home</a>
          </li>
          <li className="category" onClick={toggleDropdown}>
            <a href="#!">Category</a>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><a onClick={()=>setCategory("general")} >General</a></li>
                <li><a  onClick={()=>setCategory("health")} >Health</a></li>
                <li><a onClick={() => setCategory("business")}>Business</a></li>
                <li><a  onClick={() => setCategory("technology")} >Technology</a></li>
                <li><a  onClick={() => setCategory("sports")} >Sports</a></li>
                <li><a  onClick={() => setCategory("science")} >Science</a></li>
              </ul>
            )}
          </li>
          <li><a onClick={handle} href="contact">Contact Us</a></li>
        </ul>
      </div>

      <form action="" className="search-bar">
        <input type="text" placeholder="search box" />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </form>
      
    </nav>
  );
};

export default NavBar;


