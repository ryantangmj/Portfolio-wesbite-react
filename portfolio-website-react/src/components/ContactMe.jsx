import ContactMailIcon from "@mui/icons-material/ContactMail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Paper } from "@mui/material";

function ContactMe() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <p className="section_text_p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <Paper
        elevation={3}
        sx={{
          borderRadius: 2,
          border: 1,
          mb: 5,
          borderColor: "#0F1035",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
          width: "auto",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", marginRight: 2 }}>
          <ContactMailIcon
            sx={{
              fontSize: 40,
              alignContent: "left",
              color: "#112D4E",
              mr: 1,
            }}
          />
          <p style={{ margin: 0 }}>
            <a href="mailto:ryantangmj@u.nus.edu">Email</a>
          </p>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LinkedInIcon
            sx={{
              fontSize: 40,
              alignContent: "left",
              color: "#112D4E",
              mr: 1,
            }}
          />
          <p style={{ margin: 0 }}>
            <a
              href="https://www.linkedin.com/in/ryantangmj"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </Box>
      </Paper>
    </Box>
  );
}

export default ContactMe;
