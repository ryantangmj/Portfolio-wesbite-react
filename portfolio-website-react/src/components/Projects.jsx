import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MediaCard from "./MediaCard";

function Projects() {
  const projectDetails = [
    {
      title: "Eden Food",
      description:
        "Eden Food is a web application designed to seamlessly connect consumers with local farmers and surplus produce from wet markets. Featuring a mobile-responsive user interface, the platform ensures an optimal browsing experience on any device. Users can effortlessly finalize their purchases using PayPal and select from designated pick-up points for convenient collection of their fresh, locally-sourced items. This initiative not only supports sustainable agriculture but also reduces food waste, fostering a healthier planet and community.",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "CSS",
        "Python",
        "Material-UI",
        "React Router",
        "Cloudinary",
      ],
      githubLink: "https://github.com/ryantangmj/EdenFood",
      imgSrc: [
        "https://res.cloudinary.com/dorg7gesr/image/upload/v1715592426/Screenshot_2024-05-08_at_2.46.35_PM_nvtjk3.png",
        "https://res.cloudinary.com/dorg7gesr/image/upload/v1715678860/Screenshot_2024-05-08_at_2.51.06_PM_eqqu6t.png",
        "https://res.cloudinary.com/dorg7gesr/image/upload/v1715678862/Screenshot_2024-05-08_at_2.47.20_PM_msilky.png",
        "https://res.cloudinary.com/dorg7gesr/image/upload/v1715678861/Screenshot_2024-05-08_at_2.51.32_PM_bujgzl.png",
      ],
    },
    {
      title: "Event Genesis",
      description:
        "Event Genesis is a dynamic platform designed to emulate the functionality of Eventbrite, offering users the dual ability to host and participate in events. The intuitive home page allows potential participants to effortlessly browse and sign up for events. For event organizers, the platform provides robust tools to mark and manage attendance, ensuring each event runs smoothly. This dual-faceted approach enhances user engagement by simplifying the process of event participation and management, fostering a vibrant community of active users.",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "Java EE",
        "JPQL",
        "CSS",
        "Material-UI",
        "React Router",
        "Cloudinary",
      ],
      githubLink: "https://github.com/ryantangmj/Event-Management-System-React",
      imgSrc: [
        "https://res.cloudinary.com/dorg7gesr/image/upload/v1715592434/Screenshot_2024-05-08_at_2.58.44_PM_gwhdyk.png",
        "https://res.cloudinary.com/dorg7gesr/image/upload/v1715677780/Screenshot_2024-05-08_at_2.59.03_PM_fzby6n.png",
        "https://res.cloudinary.com/dorg7gesr/image/upload/v1715677780/Screenshot_2024-05-08_at_2.56.26_PM_dceurz.png",
        "https://res.cloudinary.com/dorg7gesr/image/upload/v1715677780/Screenshot_2024-05-08_at_2.55.39_PM_fwrjwx.png",
      ],
    },
    {
      title: "Flight Enterprise System",
      description:
        "Inspired by the exceptional efficiency of Singapore Airlines' reservation system, our advanced aviation enterprise system offers comprehensive features tailored for the industry. It includes fleet management capabilities for aircraft and seating configurations, route planning for numerous destinations, and four cabin classes ranging from Economy to First Class. The system incorporates dynamic fare management that adjusts prices based on demand and availability, enhancing revenue optimization. It also supports collaborative reservation management for group bookings, streamlining coordination for group travelers. The FRS Management Client provides robust oversight of critical aviation elements such as employees, partners, and flight schedules, while the FRS Reservation Client enhances customer interaction with easy-to-use registration, flight search, and booking tools.",
      techStack: ["Java EE", "JPQL"],
      githubLink: "https://github.com/ryantangmj/Flight-Enterprise-System",
      imgSrc: [
        "https://res.cloudinary.com/dorg7gesr/image/upload/v1715592994/FRS_ysgerp.jpg",
      ],
    },
    {
      title: "TikToken",
      description:
        "TikToken is designed to enhance the current TikTok Shop experience by introducing TikTok coins, a unique incentive mechanism. This innovative feature encourages content creators to produce content based on their purchases. In return, they earn TikTok coins, which can be redeemed for cashback on future purchases. This not only motivates higher-quality content creation but also fosters a more engaging and rewarding shopping experience within the TikTok ecosystem.",
      techStack: [
        "Laravel",
        "MySQL",
        "Nuxt.js",
        "PHP",
        "Tailwind CSS",
        "TypeScript",
        "Vue.js",
      ],
      githubLink: "https://github.com/ryantangmj/TikToken",
      imgSrc: [
        "https://res.cloudinary.com/dorg7gesr/image/upload/v1715679250/tiktoken1_ozu2wu.jpg",
        "https://res.cloudinary.com/dorg7gesr/image/upload/v1715679250/tiktoken2_rwpluh.jpg",
      ],
    },
    {
      title: "Unified",
      description:
        "Unified is a streamlined mobile application designed specifically for NUS students to manage the overwhelming influx of information from various sources such as NUS Bus updates, Lost and Found notices, and Module chats. The app consolidates messages from all these channels into a single interface, featuring dedicated sections for news, module discussions, and lost and found items. This allows users to efficiently navigate and access necessary information, simplifying communication and enhancing the student experience at NUS.",
      techStack: ["React Native", "Firebase", "Firestore", "Python", "Flask"],
      githubLink: "https://github.com/ryantangmj/TheUnifiers",
      imgSrc: [
        "https://res.cloudinary.com/dorg7gesr/image/upload/v1715593672/Unified_tpdard.png",
        "https://res.cloudinary.com/dorg7gesr/image/upload/v1715679053/unified2_jl6k9l.png",
        "https://res.cloudinary.com/dorg7gesr/image/upload/v1715679051/unified3_qbv479.png",
      ],
    },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ mt: 10 }}>
      <Typography
        variant="h1"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        sx={{
          mt: "-5%",
          fontSize: isMobile ? "1rem" : "1.8rem",
          fontWeight: "bold",
        }}
      >
        My Projects
      </Typography>
      <MediaCard projectDetails={projectDetails} />
    </Box>
  );
}

export default Projects;
