import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { useTheme } from "@emotion/react";

const Footer = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-evenly",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          my: 1,
          mx: 1,
        }}
      >
        <Typography variant="h5">HUMMU'Z DÖNER</Typography>
        <Typography sx={{ my: 1 }}>Opening hours</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {" "}
          <Typography
            sx={{
              display: "flex",
            }}
          >
            Mon-Fri: 10.30 - 21.00
          </Typography>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            Sat-Sun: 11.30-20.00
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          my: 1,
          mx: 1,
        }}
      >
        <Button variant="h6">Campaigns</Button>
        <Button variant="h6">Menu</Button>
        <Button variant="h6">Restaurant</Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          my: 1,
          mx: 1,
        }}
      >
        <Button variant="h6">Feedback</Button>
        <Button variant="h6">Franchising</Button>
        <Button variant="h6">Contact</Button>
      </Box>
    </Container>
  );
};

export default Footer;
