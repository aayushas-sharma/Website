import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import WordAnimation from './word-animation';

export const Header = () => {
  const isMobile = window.innerWidth <= 768;

  const headerStyle = {
    padding: '7px 2rem',
    border: isMobile ? '' : '1px solid rgb(60, 179, 113)',
    margin: isMobile ? '' : '0 auto',
    borderRadius: isMobile ? '' : '34px',
    position: 'fixed',
    top: isMobile ? '' : '1rem',
    left: '0',
    right: '0',
    zIndex: '100',
    backgroundColor: 'white',
    width: isMobile ? '100%' : '80%',
  };

  const imageStyle = {
    width: '6%',
    display: isMobile ? 'none' : 'block',
  };

  const imageGap = {
    gap: 20,
  };

  const headerTag = {
    gap: 50,
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={headerStyle}>
        <div className="container-fluid" style={imageGap}>
          <nav className="navbar bg-body-tertiary">
            <div className="container">
            </div>
          </nav>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <img src="compLogo.jpg" alt="..." style={imageStyle} />
          <WordAnimation />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={headerTag}>
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/products">
                  PRODUCTS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/infrastructure">
                  INFRASTRUCTURE
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact-us">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
