import { createTheme } from "@mui/material";
import { useMemo } from "react";
import { CssBaseline } from "@mui/material";
import { GlobalStyles } from "@mui/material";

export const useMuiTheme = () => {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "#e0cb8a",
            orange: "#f97020", //orange
            black: "#050403",
            white: "#f7f7f7",
          },
        },
        typography: {
          fontFamily: "Bebas Neue, sans-serif", // Default font family
          fontWeightRegular: 400,
          fontWeightMedium: 500,
          fontWeightBold: 700,
          letterSpacing: "2px",
          h1: {
            fontFamily: "Bebas Neue, sans-serif",
            fontWeight: 700,
            fontSize: "3rem",
          },
          h2: {
            fontFamily: "Bebas Neue, sans-serif",
            fontWeight: 600,
            fontSize: "2.5rem",
          },
          h3: {
            fontFamily: "Bebas Neue, sans-serif",
            fontWeight: 500,
            letterSpacing: "2px",
            fontSize: "2rem",
            textTransform: "uppercase",
            color: "#f7f7f7",
          },
          h5: {
            fontFamily: "Bebas Neue, sans-serif",
            fontWeight: "bold",
            letterSpacing: "2px",
            fontSize: "1rem",
            textTransform: "uppercase",
            color: "#f7f7f7",
            margin: "1em 0 2em 0",
          },
          h6: {
            fontFamily: "Bebas Neue, sans-serif",
            fontWeight: 400,
            letterSpacing: "2px",
            fontSize: "1rem",
            textTransform: "uppercase",
            color: "#f7f7f7",
          },
          subtitle1: {
            fontFamily: "Baskervville, serif",
          },
          subtitle2: {
            fontFamily: "Baskervville, serif",
          },
          body1: {
            fontFamily: "Baskervville, serif",
          },
          body2: {
            fontFamily: "Baskervville, serif",
          },
        },
      }),
    []
  );

  return {
    theme,
    CssBaseline,
    GlobalStyles: (
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            padding: 0,
            backgroundColor: theme.palette.primary.black,
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          },
          html: {
            margin: 0,
            padding: 0,
            height: "100%",
            width: "100%",
          },
          "#root": {
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          },
        }}
      />
    ),
  };
};
