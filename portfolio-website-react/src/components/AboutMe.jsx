import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import ReactRotatingText from "react-rotating-text";

function AboutMe() {
  return (
    <Box
      sx={{ mt: "6%", justifyContent: "center" }}
      display="flex"
      flexDirection="column"
    >
      <Box>
        <Avatar
          alt="Me!"
          sx={{ width: 220, height: 220, margin: "auto" }}
          src="https://res.cloudinary.com/dorg7gesr/image/upload/v1713168349/iyshxeowceen6kpqvf8h.jpg"
        />
      </Box>
      <Box>
        <p class="section_text_p1"> Hello, I'm</p>
        <h1>
          <ReactRotatingText
            items={["Ryan Tang"]}
            pause={2000}
            typingInterval={150}
            deletingInterval={70}
            emptyPause={1000}
            cursor={true}
          />
        </h1>
        <div class="btn-container">
          <Button
            variant="contained"
            sx={{ borderRadius: 10, backgroundColor: "#112D4E" }}
          >
            Contact Info
          </Button>
        </div>
        <div id="socials-container">
          <a
            href="https://www.linkedin.com/in/ryantangmj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon
              sx={{ fontSize: 40, color: "#112D4E", mt: 1, p: 0.5 }}
            />
          </a>
          <a
            href="https://github.com/ryantangmj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon
              sx={{ fontSize: 40, color: "#112D4E", mt: 1, p: 0.5 }}
            />
          </a>
        </div>
      </Box>
    </Box>
  );
}

export default AboutMe;
