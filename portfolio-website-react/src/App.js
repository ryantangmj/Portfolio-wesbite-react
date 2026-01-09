import "./App.css";
import * as React from "react";
import ResponsiveAppBar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="App">
      <ResponsiveAppBar />
      <main>
        <section id="aboutme">
          <AboutMe />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contactme">
          <Box mt={isMobile ? "12%" : "5%"}>
            <ContactMe />
            <Footer />
          </Box>
        </section>
      </main>
    </div>
  );
}

export default App;
