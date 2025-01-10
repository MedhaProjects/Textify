import React, { useState } from "react";

const TextUtilities = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [history, setHistory] = useState([]);
  const [index, setIndex] = useState(-1);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    setWordCount(newText.split(/\s+/).filter((word) => word.length > 0).length);
    setCharCount(newText.length);
    saveToHistory(newText);
  };

  const saveToHistory = (newText) => {
    const newHistory = [...history.slice(0, index + 1), newText];
    setHistory(newHistory);
    setIndex(newHistory.length - 1);
  };

  const undo = () => {
    if (index > 0) {
      setIndex(index - 1);
      setText(history[index - 1]);
    }
  };

  const redo = () => {
    if (index < history.length - 1) {
      setIndex(index + 1);
      setText(history[index + 1]);
    }
  };

  const handleUpperCase = () => setText(text.toUpperCase());
  const handleLowerCase = () => setText(text.toLowerCase());
  const handleSentenceCase = () => {
    const sentenceCaseText = text
      .toLowerCase()
      .replace(/(?:^|\.\s*)([a-z])/g, (match) => match.toUpperCase());
    setText(sentenceCaseText);
  };

  const handleFindReplace = () => {
    const find = prompt("Enter the word to find:");
    const replace = prompt("Enter the word to replace with:");
    if (find && replace) {
      setText(text.replace(new RegExp(find, "g"), replace));
    }
  };

  const handleSpeak = () => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  };

  const handleStopSpeaking = () => {
    window.speechSynthesis.cancel();
  };

  const handleClearText = () => setText("");
  const reverseText = () => setResult(text.split("").reverse().join(""));
  const readabilityScore = () => {
    const words = text.split(" ").length;
    const sentences = text.split(/[.!?]/).filter(Boolean).length;
    const syllables = text.split(/[aeiouy]/gi).length - 1;
    const score =
      206.835 - 1.015 * (words / sentences) - 84.6 * (syllables / words);
    setResult(`Readability score: ${score.toFixed(2)}`);
  };

  const extractEmails = () =>
    setResult(
      text.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/g) ||
        "No emails found"
    );
  const extractPhoneNumbers = () =>
    setResult(text.match(/\b\d{10}\b/g) || "No phone numbers found");
  const extractURLs = () =>
    setResult(text.match(/\bhttps?:\/\/[^\s]+/g) || "No URLs found");

  const keywordDensity = () => {
    const words = text.split(/\s+/);
    const frequencies = {};
    words.forEach((word) => {
      frequencies[word] = (frequencies[word] || 0) + 1;
    });
    setResult(JSON.stringify(frequencies, null, 2));
  };

  const sortTextAlphabetically = () =>
    setResult(text.split(/\s+/).sort().join(" "));
  const sortTextByLength = () =>
    setResult(text.split(/\s+/).sort((a, b) => a.length - b.length).join(" "));

  const handleCopyText = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Text copied to clipboard!");
    });
  };

  const handleSelectAll = () => {
    const textArea = document.getElementById("textArea");
    textArea.select();
  };

  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setText((prevText) => prevText + clipboardText); // Append pasted text to the existing text
    } catch (error) {
      alert("Failed to paste text: " + error);
    }
  };

  const handleDarkModeToggle = () => setIsDarkMode(!isDarkMode);

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#000",
        padding: "20px",
      }}
    >
      <textarea
        id="textArea"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here..."
        style={{
          width: "100%",
          height: "100px",
          marginBottom: "20px",
          backgroundColor: isDarkMode ? "#555" : "#f0f0f0",
          color: isDarkMode ? "#fff" : "#000",
          border: "1px solid",
          borderColor: isDarkMode ? "#666" : "#ccc",
        }}
      />
      <div>
        <button onClick={handleUpperCase}>Uppercase</button>
        <button onClick={handleLowerCase}>Lowercase</button>
        <button onClick={handleSentenceCase}>Sentence Case</button>
        <button onClick={handleFindReplace}>Find & Replace</button>
        <button onClick={handleSpeak}>Speak</button>
        <button onClick={handleStopSpeaking}>Stop Speaking</button>
        <button onClick={handleClearText}>Clear Text</button>
        <button onClick={reverseText}>Reverse Text</button>
        <button onClick={extractEmails}>Extract Emails</button>
        <button onClick={extractPhoneNumbers}>Extract Phone Numbers</button>
        <button onClick={extractURLs}>Extract URLs</button>
        <button onClick={undo}>Undo</button>
        <button onClick={redo}>Redo</button>

        <button onClick={sortTextAlphabetically}>Sort Alphabetically</button>
        <button onClick={sortTextByLength}>Sort by Length</button>
        <button onClick={handleCopyText}>Copy Text</button>
        <button onClick={handleSelectAll}>Select All</button>
        <button onClick={handlePaste}>Paste</button>
      </div>
      <div style={{ marginTop: "20px", fontSize: "1.2rem" }}>
        <p>Word Count: {wordCount}</p>
        <p>Character Count: {charCount}</p>
        <p>{result}</p>
      </div>
      <button
        onClick={handleDarkModeToggle}
        style={{
          backgroundColor: isDarkMode ? "#555" : "#f0f0f0",
          color: isDarkMode ? "#fff" : "#000",
          border: "1px solid",
          borderColor: isDarkMode ? "#666" : "#ccc",
          marginTop: "20px",
        }}
      >
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default TextUtilities;
