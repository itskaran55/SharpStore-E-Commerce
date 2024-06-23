import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand"><strong className='fs-3 text-light'>Sharp Store</strong></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse fs-5 " id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link  text-light" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-light" to="#">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-light" to="/about">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-light" to="/signup">SignUp</Link>
              </li>
            </ul>
            <ul className="navbar-nav fs-4">
              <li className="nav-item">
                <Link className="nav-link  text-light" to="/cart">
                  <FontAwesomeIcon icon={faCartPlus} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
