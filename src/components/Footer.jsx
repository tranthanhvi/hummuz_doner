import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { useTheme } from "@emotion/react";

const Footer = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        backgroundColor: theme.palette.primary.black,
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
        {/* <Typography variant="h5">HUMMU'Z DÖNER</Typography> */}
        <Box component="img" src={`${process.env.PUBLIC_URL}/img/logo.png`} />
        {/* <Typography color={theme.palette.primary.main} sx={{ my: 1 }}>
          Opening hours
        </Typography> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h6" color={theme.palette.primary.main}>
            Mon-Fri: 10.30 - 21.00
          </Typography>
          <Typography variant="h6" color={theme.palette.primary.main}>
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
        <Button
          sx={{
            letterSpacing: "2px",
          }}
        >
          Campaigns
        </Button>
        <Button
          sx={{
            letterSpacing: "2px",
          }}
        >
          Menu
        </Button>
        <Button
          sx={{
            letterSpacing: "2px",
          }}
        >
          Restaurant
        </Button>
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
        <Button
          sx={{
            letterSpacing: "2px",
          }}
        >
          Feedback
        </Button>
        <Button
          sx={{
            letterSpacing: "2px",
          }}
        >
          Franchising
        </Button>
        <Button
          sx={{
            letterSpacing: "2px",
          }}
        >
          Contact
        </Button>
      </Box>
    </Container>
  );
};

export default Footer;
