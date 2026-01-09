import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typography from "@mui/material/Typography";
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../App.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const chipTheme = createTheme({
  palette: {
    primary: {
      main: "#365486",
    },
  },
});

export default function MediaCard({ projectDetail, index }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const images = projectDetail.imgSrc;

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={itemVariants}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          key={index}
          sx={{
            position: "relative",
            width: isMobile ? 300 : "90%",
            borderRadius: "8px",
            my: 3,
            ":hover": {
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              transform: "translateY(-5px)",
              transition: "all 0.3s ease-in-out",
            },
            display: "flex",
            flexDirection: isMobile
              ? "column"
              : index % 2 === 0
              ? "row"
              : "row-reverse",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              margin: "0 auto",
            }}
          >
            <Swiper
              style={{ width: "100%" }}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              navigation
              pagination={{ clickable: true }}
            >
              {images.map((src, idx) => {
                return (
                  <SwiperSlide key={idx} marginRight="10">
                    <CardMedia
                      component="img"
                      sx={{
                        width: "70%",
                        maxWidth: 2940 / 3,
                        height: "auto",
                        maxHeight: 500,
                        objectFit: "contain",
                        my: isMobile ? 2 : 0,
                        mx: "auto",
                      }}
                      image={src}
                      alt={`Project Image ${idx + 1}`}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
          <CardContent sx={{ width: "80%" }}>
            <Box
              sx={{
                borderRadius: "8px",
              }}
            >
              <Typography
                component="div"
                fontFamily="inherit"
                sx={{
                  fontSize: isMobile ? "1rem" : "1.5rem",
                  fontWeight: "bold",
                  lineHeight: "1.4",
                  mb: "8px",
                  color: "#333",
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                {projectDetail.title}
              </Typography>
              {isMobile ? null : (
                <Typography
                  sx={{
                    textAlign: "justify",
                    m: 0.25,
                    mr: 3,
                    mb: "12px",
                    fontSize: "1rem",
                    color: "#666",
                  }}
                  fontFamily="inherit"
                >
                  {projectDetail.description}
                </Typography>
              )}
              <ThemeProvider theme={chipTheme}>
                <Stack
                  direction="row"
                  sx={{
                    justifyContent: isMobile ? "center" : "left",
                    flexWrap: "wrap",
                  }}
                >
                  {projectDetail.techStack.map((tech, idx) => (
                    <Chip
                      label={tech}
                      color="primary"
                      key={idx}
                      sx={{ m: isMobile ? 0.1 : 0.25 }}
                    />
                  ))}
                </Stack>
              </ThemeProvider>
              {isMobile ? (
                <Link
                  sx={{ mt: "5%", display: "block", textAlign: "center" }}
                  href={projectDetail.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check it out on Github!
                </Link>
              ) : (
                <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <motion.a
                    href={projectDetail.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    style={{ display: "inline-block" }}
                  >
                    <GitHubIcon
                      sx={{
                        fontSize: isMobile ? 30 : 40,
                        alignContent: "left",
                        color: "#112D4E",
                        mt: 1,
                      }}
                    />
                  </motion.a>
                </Box>
              )}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </motion.div>
  );
}
