import * as React from "react";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container, Box, Card, CardContent } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { experiences } from "../data/experience";

function Experience() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

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

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        py: isMobile ? 2 : 5,
      }}
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <Typography
          variant="h1"
          fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
          sx={{
            mb: 5,
            fontSize: isMobile ? "2rem" : "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            color: "#112D4E",
          }}
        >
          My Experiences
        </Typography>

        <Box sx={{ width: "100%", px: isMobile ? 1 : 4 }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
            navigation={!isMobile}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            style={{
              paddingBottom: "60px",
              paddingTop: "40px",
              paddingLeft: "20px",
              paddingRight: "20px",
              "--swiper-navigation-color": "#112D4E",
              "--swiper-pagination-color": "#112D4E",
            }}
          >
            {experiences.map((exp, index) => (
              <SwiperSlide key={index} style={{ height: "auto" }}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    p: 3,
                    borderRadius: 4,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 12px 32px rgba(0,0,0,0.2)",
                    },
                    borderTop: "6px solid #112D4E",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      mb: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      backgroundColor: "#F9F7F7",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  >
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      style={{
                        width: "60%",
                        height: "60%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                  <CardContent sx={{ p: 0, width: "100%" }}>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        fontWeight: "bold",
                        color: "#112D4E",
                        mb: 1,
                        minHeight: "64px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {exp.role}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontStyle: "italic",
                        color: "#3F72AF",
                        mb: 2,
                      }}
                    >
                      {exp.company}
                    </Typography>
                    <Box
                      sx={{
                        display: "inline-block",
                        px: 2,
                        py: 0.5,
                        backgroundColor: "#DBE2EF",
                        borderRadius: "16px",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: "medium",
                          color: "#112D4E",
                        }}
                      >
                        {exp.period}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </motion.div>
    </Container>
  );
}

export default Experience;
