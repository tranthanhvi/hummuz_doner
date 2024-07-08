import { createTheme } from "@mui/material";
import { useMemo } from "react";

export const useMuiTheme = () => {
  return useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "#f97020", //orange
            black: "#050403",
            white: "#f7f7f7",
          },
        },
        typography: {
          fontFamily: "Roboto, Arial, sans-serif", // Default font family
          fontWeightRegular: 400,
          fontWeightMedium: 500,
          fontWeightBold: 700,
          h1: {
            fontFamily: "Montserrat, Arial, sans-serif", // Custom font for h1
            fontWeight: 700,
            fontSize: "3rem",
          },
          h2: {
            fontFamily: "Montserrat, Arial, sans-serif", // Custom font for h2
            fontWeight: 600,
            fontSize: "2.5rem",
          },
          h6: {
            fontFamily: "Montserrat, Arial, sans-serif", // Custom font for h2
            fontWeight: "bold",
            fontSize: "1rem",
            textTransform: "uppercase",
            color: "#f7f7f7",
          },
        },
      }),
    []
  );
};
