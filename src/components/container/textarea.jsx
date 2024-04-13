import React, { useState } from 'react';

const TextbookReader = () => {
  const [text, setText] = useState('');
  
  const speakText = () => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className='flex justify-center items-center  bg-gray-100'>
      <div className='max-w-md w-full p-2 bg-white rounded-lg shadow-md'>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here..."
        rows={10}
        cols={50}
        className='w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring focus:border-blue-300'
      />
      <button className="mt-4 bg-Teal hover:bg-Teal-700 text-white font-bold py-2 px-4 rounded" onClick={speakText}>Read Text</button>
    </div>
    </div>
  );
};

export default TextbookReader;