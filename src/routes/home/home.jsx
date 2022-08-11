import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import heroImage from "../../assets/hero-chair.png";
import Footer from "../../components/footer/footer";
import Testimonials from "../../components/testimonials/testimonials";
import Popup from "../../components/popup/popup";

import {
  Button,
  Box,
  Container,
  createTheme,
  colors,
  ThemeProvider,
  Stack,
} from "@mui/material";
import "./home.scss";

const theme = createTheme({
  palette: {
    secondary: {
      main: colors.lightBlue[600],
    },
    heroInnerBox: {
      main: colors.red[100],
    },
    heroOuterBox: {
      main: colors.red[200],
    },
  },
});

const Home = () => {
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 1000);
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <Box className="home-container">
            <Box className="home-tagline-container">
              <p className="home-tagline">
                Aesthetic <br /> modern-designed furnitures
              </p>
            </Box>

            <Box className="home-btn-container">
              <Button
                className="home-btn"
                href="/shop"
                variant="contained"
                sx={{
                  bgcolor: "secondary.light",
                }}
              >
                shop now!
              </Button>
            </Box>
            <Box
              className="inner-box"
              sx={{
                bgcolor: "heroInnerBox.main",
              }}
            />
            <Box
              className="outer-box"
              sx={{
                bgcolor: "heroOuterBox.main",
              }}
            ></Box>
            <Box className="home-img-container">
              <img className="home-img" src={heroImage} alt="heroImage" />
            </Box>
          </Box>
          <Box sx={{ textAlign: "center" }}>scroll down</Box>
          <Container maxWidth="xl">
            <Stack
              className="discount-btn-container"
              sx={{ maxWidth: "10rem", margin: "3rem auto" }}
            >
              <Popup trigger={timedPopup} setTrigger={setTimedPopup} />
            </Stack>
          </Container>

          <Testimonials />
        </Container>

        <Footer />
      </ThemeProvider>
      <Outlet />
    </div>
  );
};

export default Home;
