import React from 'react';

export default function Navbar({ isDarkMode, toggleTheme }) {
  return (
    <nav
      className={`navbar navbar-expand-lg ${isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark'} border border-dark`}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand fw-bold d-flex align-items-center"
          href="#"
          style={{ color: isDarkMode ? 'white' : 'black' }}
        >
          {/* Logo */}
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`} // Change 'logo.png' to your logo's filename
            alt="Logo"
            width="30" // Adjust the size of the logo
            height="30"
            className="me-2"
          />
          Textify
        </a>
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <button
            className={`btn btn-outline-${isDarkMode ? 'light' : 'dark'} ms-3`}
            onClick={toggleTheme}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
}
