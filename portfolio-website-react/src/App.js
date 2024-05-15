import "./App.css";
import * as React from "react";
import ResponsiveAppBar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
        <Box mt={isMobile ? "12%" : "5%"}>
          <ContactMe />
          <Footer />
        </Box>
      </div>
    </div>
  );
}

export default App;
