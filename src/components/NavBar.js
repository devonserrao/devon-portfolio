import React from 'react';
import { Link } from 'react-router-dom';

  function NavBar() {
      return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
            <img className="navbarLogo" src="logo192.png" />
            </Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/bookstore" className="nav-link">Bookstore</Link>
                </li>
                <li className="nav-item">
                    <Link to="/angular" className="nav-link">Angular Project</Link>
                </li>
                <li className="nav-item">
                    <Link to="/csharp" className="nav-link">C Sharp Project</Link>
                </li>
            </ul>
        </nav>
                    
      )
  }

  export default NavBar;