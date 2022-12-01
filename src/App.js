import "./App.css";
import Footer from "./components/footer/Footer";
import Front from "./components/front/Front";
import Join from "./components/Join/Join";
import Project from "./components/projects/Project";
import Reasons from "./components/Reasons/Reasons";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";
function App() {
  return (
    <div className="App">
      <Front />
      <Project />
      <Skills />
      <Reasons />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
