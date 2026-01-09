import ContactMailIcon from "@mui/icons-material/ContactMail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Link, Paper } from "@mui/material";
import { motion } from "framer-motion";

function ContactMe() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: isMobile ? "85vh" : "80vh",
        }}
      >
        <Box sx={{ mt: isMobile ? "-8%" : "-5%" }}>
          <p style={{ fontSize: "1.2rem", color: "#666" }}>Get in Touch</p>
          <h2
            style={{
              fontSize: "2rem",
              color: "#112D4E",
              marginBottom: "1.5rem",
            }}
          >
            Contact Me
          </h2>
          <Paper
            elevation={6}
            sx={{
              borderRadius: 4,
              border: "1px solid rgba(17, 45, 78, 0.1)",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              p: 4,
              width: "auto",
              background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", marginRight: 4 }}>
              <ContactMailIcon
                sx={{
                  fontSize: 40,
                  color: "#112D4E",
                  mr: 1.5,
                }}
              />
              <Link
                href="mailto:ryantangmj@u.nus.edu"
                underline="hover"
                sx={{
                  color: "#112D4E",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                }}
              >
                Email
              </Link>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LinkedInIcon
                sx={{
                  fontSize: 40,
                  color: "#112D4E",
                  mr: 1.5,
                }}
              />
              <Link
                href="https://www.linkedin.com/in/ryantangmj"
                underline="hover"
                sx={{
                  color: "#112D4E",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                }}
              >
                LinkedIn
              </Link>
            </Box>
          </Paper>
        </Box>
      </Box>
    </motion.div>
  );
}

export default ContactMe;
