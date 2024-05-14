import "./App.css";
import ResponsiveAppBar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import MediaCard from "./components/MediaCard";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <AboutMe />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
