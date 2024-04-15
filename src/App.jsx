import React from "react";
import { Navbar, Home, About, Courses, Teacher, Contact, Footer, Textarea, SpeechToText } from './components/index';

import HoverToSpeech from "./components/HoverToSpeech"; 

function App() {
  return (
    <div id="speakThis" className="font-Poppins bg-Solitude">
      <Navbar />
      <Home />
      <About />
      <Courses />
      <Textarea />
      <SpeechToText />
      <Teacher />
      <Contact />
      <Footer />
      <HoverToSpeech />
    </div>
  );
}

export default App;
