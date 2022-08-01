import heroImage from "../../assets/hero-chair.png";

import {
  Button,
  Box,
  Container,
  createTheme,
  colors,
  ThemeProvider,
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
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Home;
