import React, { useState } from 'react';

function SpeechToText() {
  const [transcript, setTranscript] = useState('');
  const [isRecognitionStarted, setIsRecognitionStarted] = useState(false);

  const handleSpeechRecognition = () => {
    const recognition = new window.webkitSpeechRecognition(); // For Chrome
    recognition.onstart = () => {
      setIsRecognitionStarted(true);
    };
    recognition.onend = () => {
      setIsRecognitionStarted(false);
    };
    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      setTranscript(result);
    };
    recognition.start();
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-100'>
      <h1 className="text-3xl font-bold mb-4">Speech to Text Generator</h1>
      <button className='bg-Teal hover:bg-Teal-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus-opacity-50 mb-4' onClick={handleSpeechRecognition}>
        {isRecognitionStarted ? 'Speech Recognition Started' : 'Start Speech Recognition'}
      </button>
      {isRecognitionStarted && <p className="mb-4">Listening...</p>}
      <textarea className='p-2 border border-gray-300 rounded w-96 h-48' value={transcript} readOnly />
    </div>
  );
}

export default SpeechToText;
