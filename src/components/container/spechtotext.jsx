import React, { useState } from 'react';

function SpeechToText() {
  const [transcript, setTranscript] = useState('');
  
  const handleSpeechRecognition = () => {
    const recognition = new window.webkitSpeechRecognition(); // For Chrome
    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      setTranscript(result);
    };
    recognition.start();
  };

  return (
    <div >
      <button onClick={handleSpeechRecognition}>Start Speech Recognition</button>
      <p>{transcript}</p>
    </div>
  );
}

export default SpeechToText;
