import "./App.css";
import ResponsiveAppBar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <AboutMe />
      <Experience />
    </div>
  );
}

export default App;
