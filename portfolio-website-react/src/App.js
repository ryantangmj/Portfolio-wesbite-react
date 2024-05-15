import "./App.css";
import * as React from "react";
import ResponsiveAppBar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <div id="aboutme">
        <AboutMe />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contactme">
        <Box mt="5%">
          <ContactMe />
          <Footer />
        </Box>
      </div>
    </div>
  );
}

export default App;
