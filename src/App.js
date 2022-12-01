import "./App.css";
import Front from "./components/front/Front";
import Reasons from "./components/Reasons/Reasons";
import Skills from "./components/skills/Skills";
function App() {
  return (
    <div className="App">
      <Front />
      <Skills />
      <Reasons />
    </div>
  );
}

export default App;
