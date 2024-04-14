import React from "react";
import {
  Navbar,
  Home,
  About,
  Teacher,
  Contact,
  Courses,
  Footer,
  Textarea,
  SpeechToText,
  
} from "./components/index";
import HoverToSpeech from "./components"; 

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
