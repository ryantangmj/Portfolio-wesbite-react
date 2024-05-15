import ContactMailIcon from "@mui/icons-material/ContactMail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Link, Paper } from "@mui/material";

function ContactMe() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "80vh",
      }}
    >
      <Box sx={{ mt: isMobile ? "-1%" : "-5%" }}>
        <p>Get in Touch</p>
        <h2>Contact Me</h2>
        <Paper
          elevation={3}
          sx={{
            borderRadius: 2,
            border: 1,
            borderColor: "#0F1035",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            p: 5,
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
            <Link href="mailto:ryantangmj@u.nus.edu">Email</Link>
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
            <Link href="https://www.linkedin.com/in/ryantangmj">LinkedIn</Link>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default ContactMe;
