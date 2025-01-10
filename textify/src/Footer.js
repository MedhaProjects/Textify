import React from 'react';

const FooterPage = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <ul>
            <li><a href="/about">Home</a></li>
        
          </ul>
        </div>

        <div className="footer-socials">
          <p>Follow Us:</p>
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <p>Have any questions? Reach us at:</p>
          <p>Email: <a href="mailto:support@wordcounter.com">support@wordcounter.com</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Word Counter. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterPage;
