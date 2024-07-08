import React from "react";
import { Navbar } from "./components/Navbar";
import { Container, ThemeProvider } from "@mui/material";
import { useMuiTheme } from "./useMuiTheme";
import Footer from "./components/Footer";
import Menu from "./components/Menu/Menu";

const App = () => {
  const theme = useMuiTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container
          sx={{
            backgroundColor: theme.palette.primary.main,
            minHeight: "100vh",
          }}
        >
          <Container>
            <Menu />
            <Footer />
          </Container>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
