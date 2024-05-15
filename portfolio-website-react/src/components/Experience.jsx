import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container } from "@mui/material";

function Experience() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container sx={{ height: "100vh" }}>
      <Typography
        variant="h1"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        sx={{
          mt: "-5%",
          fontSize: isMobile ? "1rem" : "1.8rem",
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
        <TimelineItem sx={{ mt: "1%" }}>
          <TimelineOppositeContent
            sx={{ py: "3.8%" }}
            align="right"
            variant="body1"
          >
            May 2024 - Aug 2024
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
              Machine Learning Engineer
            </Typography>
            <br />
            <Typography variant="body1" fontStyle="italic">
              Elevarm
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{ py: "2%" }} variant="body1">
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
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ py: "2%" }}
            align="right"
            variant="body1"
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
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ py: "2.5%" }}
            align="right"
            variant="body1"
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
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h7" fontWeight="bold" component="span">
              Engineer Intern
            </Typography>
            <br />
            <Typography variant="body1" fontStyle="italic">
              Land Transport Authority
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
}

export default Experience;
