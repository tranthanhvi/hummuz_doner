import React from "react";
import { Container, Box, Typography, Button, Grid, Img } from "@mui/material";
import { DonerMeatballs, VegItems } from "./MenuItems";
import { useTheme } from "@emotion/react";
const Menu = () => {
  const theme = useTheme();
  return (
    <>
      <Typography
        variant="h3"
        sx={{ textAlign: "left", mt: "1em", mb: "0.5em" }}
      >
        Our Menu
      </Typography>
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        sx={{
          textAlign: "center",
          mt: "1em",
          mb: "0.5em",
          textTransform: "uppercase",
        }}
      >
        Döner Meat Lovers
      </Typography>
      <Grid container spacing={3}>
        {DonerMeatballs.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Box sx={{ my: 2, display: "flex", flexDirection: "column" }}>
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{
                  objectFit: "contain",
                  width: "100%",
                  height: "auto",
                  maxWidth: { xs: "100%", md: 350 },
                  maxHeight: { xs: "auto", md: 250 },
                  filter: "drop-shadow(0 2px 4px rgba(0,0,0, 0.5))",
                  mb: 1,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  my: 1,
                }}
              >
                {item.name}
              </Typography>
              <Typography variant="body2">{item.ingredients}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3}>
        {VegItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Box sx={{ my: 2 }}>
              <Box component="img" src={item.image} alt={item.name} />
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2">{item.ingredients}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Menu;
