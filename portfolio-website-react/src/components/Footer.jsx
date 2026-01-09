import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography
        variant="body2"
        color="#181B13"
        mt={1}
        fontFamily={"nunito, sans-serif"}
      >
        {"Copyright © "}
        Ryan Tang&nbsp;
        {new Date().getFullYear()}. All Rights Reserved.
      </Typography>
    </Box>
  );
}
