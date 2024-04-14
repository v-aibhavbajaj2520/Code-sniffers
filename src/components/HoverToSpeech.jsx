import React, { useEffect } from "react";

function HoverToSpeech() {
  useEffect(() => {
    const speakText = (event) => {
      const message = event.target.innerText; // or event.target.textContent
      const synth = window.speechSynthesis;
      const voices = synth.getVoices();

      if (voices.length > 0) {
        const utterance = new SpeechSynthesisUtterance(message);
        utterance.voice = voices[0]; // Select first voice
        synth.speak(utterance);
      } else {
        console.log("No voices available for speech synthesis");
      }
    };

    const element = document.getElementById("speakThis");
    if (element) {
      element.addEventListener("mouseover", speakText);
    }

    return () => {
      if (element) {
        element.removeEventListener("mouseover", speakText);
      }
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return null; // Since this component doesn't render any UI
}

export default HoverToSpeech;
