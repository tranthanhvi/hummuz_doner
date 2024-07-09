import React from "react";
import { Navbar } from "./components/Navbar";
import { Container, ThemeProvider } from "@mui/material";
import { useMuiTheme } from "./useMuiTheme";
import Footer from "./components/Footer";
import Menu from "./components/Menu/Menu";

const App = () => {
  const { theme, CssBaseline, GlobalStyles } = useMuiTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {GlobalStyles}
        <Navbar />
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: " 2em auto",
            padding: "0",
          }}
        >
          <Menu />
        </Container>

        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
