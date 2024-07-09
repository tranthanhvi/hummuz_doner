import { Box, styled, Typography } from "@mui/material";
import React from "react";

const Background = styled(Box)({
  position: "relative",
  backgroundImage: "url()",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  textAlign: "center",
});

const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
});

const HeroSection = () => {
  return (
    <Background>
      <Overlay />
      <Typography>Welcome to HUMMU'Z & DÖNER</Typography>
      <Typography>
        Experience the fresh and flavorful taste of Middle East here!s
      </Typography>
    </Background>
  );
};

export default HeroSection;
