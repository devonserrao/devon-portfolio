import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

  function NavBar() {
      return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
            <img className="navbarLogo" src="logo192.png" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className = "collapse navbar-collapse" id ="navbarSupportedContent">
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
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/apicall" className="nav-link">API Call</Link>
                    </li>
                </ul>
            </div>
        </nav>
                    
      )
  }

  export default NavBar;