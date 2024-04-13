import React, { useState } from 'react';

const TextbookReader = () => {
  const [text, setText] = useState('');
  
  const speakText = () => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  };

  return (
    <div >
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here..."
        rows={10}
        cols={50}
      />
      <button onClick={speakText}>Read Text</button>
    </div>
  );
};

export default TextbookReader;