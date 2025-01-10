import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';
import Feature from './Feature';
import Footer from './Footer';

function App() {
  // State to manage dark/light mode
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle dark/light mode
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: isDarkMode ? 'url("/back.jpg")' : 'url("/white.jpg")', // Dynamic background based on mode
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        color: isDarkMode ? 'white' : 'black', // Text color changes based on mode
      }}
    >
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div className="container py-5">
        <Textform isDarkMode={isDarkMode} />
        <Feature isDarkMode={isDarkMode} />
        <Footer isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}
//uploding

export default App;
