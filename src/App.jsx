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

function App() {
  return (
    <div className="font-Poppins bg-Solitude">
      <Navbar />
      <Home />
      <About />
      <Courses />
      <Textarea />
      <SpeechToText />
      <Teacher />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
