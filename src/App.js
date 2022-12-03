import "./App.css";
import Footer from "./components/Footer";
import Front from "./components/Front";
import Join from "./components/Join";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Front />
      <Project />
      <Skills />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
