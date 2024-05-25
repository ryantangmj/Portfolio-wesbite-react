import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Experience() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation happens only once
    threshold: 0.05, // Trigger when 10% of the item is in view
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
    <Container sx={{ height: "100vh" }}>
      <Typography
        variant="h1"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        sx={{
          mt: isMobile ? "-12%" : "-5%",
          fontSize: isMobile ? "1.5rem" : "1.8rem",
          fontWeight: "bold",
        }}
      >
        My Experiences
      </Typography>
      <Timeline
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        position="alternate"
      >
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <TimelineItem sx={{ mt: "1%" }}>
            <TimelineOppositeContent
              sx={{ py: isMobile ? "11%" : "3.8%" }}
              align="right"
              variant={isMobile ? "body4" : "body1"}
            >
              May 2024 - Present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector
                sx={{ backgroundColor: "#365486", minHeight: "20px" }}
              />
              <TimelineDot sx={{ p: 1.5, backgroundColor: "#112D4E" }}>
                <img
                  src="https://res.cloudinary.com/dorg7gesr/image/upload/v1715161931/elevarm_logo_db7s3k.jpg"
                  height="30"
                />
              </TimelineDot>
              <TimelineConnector
                sx={{ backgroundColor: "#365486", minHeight: "40px" }}
              />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "3%", px: 2 }}>
              <Typography variant="h7" fontWeight="bold" component="span">
                Data/ML Engineer
              </Typography>
              <br />
              <Typography variant="body1" fontStyle="italic">
                Elevarm
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ py: isMobile ? "8%" : "2%" }}
              variant={isMobile ? "body4" : "body1"}
            >
              Apr 2024 - May 2024
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ p: 1.5, backgroundColor: "#112D4E" }}>
                <img
                  src="https://res.cloudinary.com/dorg7gesr/image/upload/v1715162634/294195731_457548479709135_2751005594326992428_n_r8wzzc.jpg"
                  height="30"
                />
              </TimelineDot>
              <TimelineConnector
                sx={{ backgroundColor: "#365486", minHeight: "40px" }}
              />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h7" fontWeight="bold" component="span">
                Mathematics tutor
              </Typography>
              <br />
              <Typography variant="body1" fontStyle="italic">
                NUS SCALE
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ py: isMobile ? "6%" : "2%" }}
              variant={isMobile ? "body4" : "body1"}
              align="right"
            >
              Aug 2023 - Dec 2024
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ p: 1.5, backgroundColor: "#112D4E" }}>
                <img
                  src="https://res.cloudinary.com/dorg7gesr/image/upload/v1715162634/420941674_770595455104734_9001455890992117025_n_wceal2.jpg"
                  height="30"
                />
              </TimelineDot>
              <TimelineConnector
                sx={{ backgroundColor: "#365486", minHeight: "40px" }}
              />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h7" fontWeight="bold" component="span">
                Teaching Assistant (CS1010J)
              </Typography>
              <br />
              <Typography variant="body1" fontStyle="italic">
                NUS Computing
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ py: isMobile ? "17%" : "2.5%" }}
              variant={isMobile ? "body4" : "body1"}
              align="right"
            >
              Dec 2020 - Dec 2020
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ backgroundColor: "#365486" }} />
              <TimelineDot sx={{ p: 1.5, backgroundColor: "#112D4E" }}>
                <img
                  src="https://res.cloudinary.com/dorg7gesr/image/upload/v1715163000/LTA-logo-1_rljf28.jpg"
                  height="30"
                />
              </TimelineDot>
              <TimelineConnector
                sx={{ backgroundColor: "#365486", minHeight: "20px" }}
              />
            </TimelineSeparator>
            <TimelineContent sx={{ py: isMobile ? "7%" : "1%", px: 2 }}>
              <Typography variant="h7" fontWeight="bold" component="span">
                Engineer Intern
              </Typography>
              <br />
              <Typography variant="body1" fontStyle="italic">
                Land Transport Authority
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </motion.div>
      </Timeline>
    </Container>
  );
}

export default Experience;
