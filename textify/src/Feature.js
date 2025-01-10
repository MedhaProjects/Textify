// Feature.js
import 'animate.css'; // Import Animate.css
import React from 'react';
import './App.css'; // Import the CSS for styling and animation
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome icons

const Feature = ({ isDarkMode }) => {
  return (
    <div className={`feature-section ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h2 className="feature-heading" style={{ color: 'white' }}>
  Our Amazing Features
</h2>
      <div className="feature-cards">
        <div className="feature-card animate__animated animate__fadeInUp">
          <div className="feature-icon">
            <i className="fas fa-pencil-alt"></i>
          </div>
          <h3 className="feature-title">Text Editing</h3>
          <p className="feature-description">
            Edit text with a variety of styles, including uppercase, lowercase, sentence case, and more.
          </p>
        </div>

        <div className="feature-card animate__animated animate__fadeInUp animate__delay-1s">
          <div className="feature-icon">
            <i className="fas fa-microphone"></i>
          </div>
          <h3 className="feature-title">Text-to-Speech</h3>
          <p className="feature-description">
            Listen to your text with our text-to-speech functionality.
          </p>
        </div>

        <div className="feature-card animate__animated animate__fadeInUp animate__delay-1s">
  <div className="feature-icon">
    <i className="fas fa-envelope"></i>
  </div>
  <h3 className="feature-title">Extract Emails</h3>
  <p className="feature-description">
    Extract all email addresses from the text with just a click.
  </p>
</div>

<div className="feature-card animate__animated animate__fadeInUp animate__delay-1s">
  <div className="feature-icon">
    <i className="fas fa-phone-alt"></i>
  </div>
  <h3 className="feature-title">Extract Phone Numbers</h3>
  <p className="feature-description">
    Extract all phone numbers from the provided text effortlessly.
  </p>
</div>

<div className="feature-card animate__animated animate__fadeInUp animate__delay-1s">
  <div className="feature-icon">
    <i className="fas fa-link"></i>
  </div>
  <h3 className="feature-title">Extract URLs</h3>
  <p className="feature-description">
    Easily extract all URLs and web links embedded within the text.
  </p>
</div>
<div className="feature-card animate__animated animate__fadeInUp animate__delay-1s">
  <div className="feature-icon">
    <i className="fas fa-undo"></i>
  </div>
  <h3 className="feature-title">Reverse Text</h3>
  <p className="feature-description">
    Reverse the order of the characters in your text with ease.
  </p>
</div>

<div className="feature-card animate__animated animate__fadeInUp animate__delay-1s">
  <div className="feature-icon">
    <i className="fas fa-eraser"></i>
  </div>
  <h3 className="feature-title">Clear Text</h3>
  <p className="feature-description">
    Remove all text with a single click and start fresh.
  </p>
</div>

<div className="feature-card animate__animated animate__fadeInUp animate__delay-1s">
  <div className="feature-icon">
    <i className="fas fa-copy"></i>
  </div>
  <h3 className="feature-title">Copy and Paste</h3>
  <p className="feature-description">
    Copy your text to the clipboard and paste it wherever you need.
  </p>
</div>

<div className="feature-card animate__animated animate__fadeInUp animate__delay-1s">
  <div className="feature-icon">
    <i className="fas fa-clipboard-list"></i>
  </div>
  <h3 className="feature-title">Select All</h3>
  <p className="feature-description">
    Select all the text in the field with a single click.
  </p>
</div>
<div className="feature-card animate__animated animate__fadeInUp animate__delay-1s">
  <div className="feature-icon">
    <i className="fas fa-undo"></i>
  </div>
  <h3 className="feature-title">Undo</h3>
  <p className="feature-description">
    Undo the last text change with a single click.
  </p>
</div>

<div className="feature-card animate__animated animate__fadeInUp animate__delay-1s">
  <div className="feature-icon">
    <i className="fas fa-redo"></i>
  </div>
  <h3 className="feature-title">Redo</h3>
  <p className="feature-description">
    Redo the undone text change with a single click.
  </p>
</div>

<div className="feature-card animate__animated animate__fadeInUp animate__delay-1s">
  <div className="feature-icon">
    <i className="fas fa-sort-alpha-down"></i>
  </div>
  <h3 className="feature-title">Sort Alphabetically</h3>
  <p className="feature-description">
    Sort the words in the text alphabetically with one click.
  </p>
</div>
<div className="feature-card animate__animated animate__fadeInUp animate__delay-1s">
  <div className="feature-icon">
    <i className="fas fa-redo"></i>
  </div>
  <h3 className="feature-title">Redo</h3>
  <p className="feature-description">
    Redo the undone text change with a single click.
  </p>
</div>
<div className="feature-card animate__animated animate__fadeInUp animate__delay-1s">
  <div className="feature-icon">
    <i className="fas fa-sort-numeric-down"></i>
  </div>
  <h3 className="feature-title">Sort by Length</h3>
  <p className="feature-description">
    Sort the words in the text by their length in ascending order.
  </p>
</div>

        <div className="feature-card animate__animated animate__fadeInUp animate__delay-2s">
          <div className="feature-icon">
            <i className="fas fa-search"></i>
          </div>
          <h3 className="feature-title">Find & Replace</h3>
          <p className="feature-description">
            Easily find and replace any word in your text.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
