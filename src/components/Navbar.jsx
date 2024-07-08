import React from "react";
import { useTheme } from "@emotion/react";

import {
  AppBar,
  Typography,
  Toolbar,
  Menu,
  Container,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar = () => {
  const theme = useTheme();

  const pages = [
    { name: "restaurant", link: "./restaurant" },
    { name: "menu", link: "./menu" },
    { name: "campaigns", link: "./campaigns" },
    { name: "about us", link: "./aboutus" },
    { name: "more", link: "./more" },
  ];
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: theme.palette.primary.black,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: "1em",
          }}
        >
          {" "}
          <Box component="img" src="./img/logo.png" />
          <Typography variant="h6">Tripla/Hakaniemi</Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none", justifyContent: "flex-end" },
          }}
        >
          <IconButton
            size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            // onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",
            mr: "1rem",
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              sx={{
                fontWeight: "semi-bold",
                fontSize: "1em",
                my: 2,
                mx: 1,
                color: theme.palette.primary.white,
                transition: "all 0.3s ease",

                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.black,
                  padding: "1em",
                },
              }}
            >
              {page.name}
            </Button>
          ))}
        </Box>
      </Container>
    </AppBar>
  );
};
