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

export default function ItemCard({ projectDetails }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const palette = createTheme({
    palette: {
      primary: {
        main: "#365486",
      },
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {projectDetails.map((projectDetail, index) => {
        const images = projectDetail.imgSrc; // Assuming imgSrcs is an array of image URLs

        return (
          <Card
            key={index}
            sx={{
              position: "relative",
              width: isMobile ? 300 : "90%",
              borderRadius: "8px",
              my: 3,
              ":hover": {
                boxShadow: 20,
              },
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
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
                  fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
                  sx={{
                    fontSize: isMobile ? "1rem" : "1.5rem",
                    fontWeight: "bold",
                    lineHeight: "1.4",
                    mb: "8px",
                    color: "#333",
                    alignItems: "center",
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
                    fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
                  >
                    {projectDetail.description}
                  </Typography>
                )}
                <ThemeProvider theme={palette}>
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
                    sx={{ mt: "5%", display: "block" }}
                    href={projectDetail.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check it out on Github!
                  </Link>
                ) : (
                  <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                    <a
                      href={projectDetail.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon
                        sx={{
                          fontSize: isMobile ? 30 : 40,
                          alignContent: "left",
                          color: "#112D4E",
                          mt: 1,
                        }}
                      />
                    </a>
                  </Box>
                )}
              </Box>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
}
