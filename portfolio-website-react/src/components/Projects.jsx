import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MediaCard from "./MediaCard";
import { projectDetails } from "../data/projects";

function Projects() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ mt: 10 }}>
      <Typography
        variant="h1"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        sx={{
          pt: isMobile ? 9 : 12,
          mb: 3,
          fontSize: isMobile ? "2rem" : "2.5rem",
          fontWeight: "bold",
          textAlign: "center",
          color: "#112D4E",
        }}
      >
        My Projects
      </Typography>
      {projectDetails.map((project, index) => (
        <MediaCard key={index} projectDetail={project} index={index} />
      ))}
    </Box>
  );
}

export default Projects;
