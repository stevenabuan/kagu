import Directory from "../../components/directory/directory";

import livingRoomImage from "../../assets/livingroom.jpg";
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
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: { livingRoomImage },
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "Women's",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "Men's",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(10, 1fr)",
              gridTemplateRows: "1.5rem repeat(4, 12rem)",
            }}
          >
            <Box
              sx={{
                fontSize: "5.5rem",
                fontWeight: 100,
                gridColumn: "1/6",
                gridRow: "2/4",
                zIndex: 5,
                alignSelf: "center",
              }}
            >
              <p>
                Aesthetic <br /> modern-designed furnitures
              </p>
            </Box>

            <Box
              sx={{
                gridColumn: "1/3",
                gridRow: "4",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  fontSize: "1.6rem",
                  fontFamily: "Montserrat",
                  // textTransform: "lowercase",
                  bgcolor: "secondary.light",
                  borderRadius: 0,
                }}
              >
                shop now!
              </Button>
            </Box>
            <Box
              sx={{
                gridColumn: "4/10",
                gridRow: "2",
                maxWidth: "48rem",
                height: "35rem",
                boxShadow: 3,
                bgcolor: "heroInnerBox.main",
                // backgroundColor: "#f4bfbf",
                // "&:hover": {
                //   backgroundImage: `url(${livingRoomImage})`,
                //   // backgroundColor: "#f4bfbf",
                //   opacity: [0.9, 0.8, 0.9],
                // },
              }}
            />
            <Box
              sx={{
                gridColumn: "6/11",
                gridRow: "3",
                maxWidth: "45rem",
                height: "30rem",
                boxShadow: 3,
                bgcolor: "heroOuterBox.main",
                // backgroundColor: "#f4bfbf",
                // backgroundImage: `url(${livingRoomImage})`,

                // "&:hover": {
                //   backgroundColor: "#ffece0",
                //   opacity: [0.9, 0.8, 0.9],
                // },
              }}
            >
              {/* <img
                src={livingRoomImage}
                alt="livingroom"
                style={{ maxWidth: "45rem" }}
              /> */}
            </Box>
            <Box
              sx={{
                gridColumn: "6/11",
                gridRow: "2/6",
                justifySelf: "center",
                alignSelf: "center",
              }}
            >
              <img src={heroImage} height="600" alt="heroImage" />
            </Box>
          </Box>
        </Container>
        <Directory categories={categories} />
      </ThemeProvider>
    </div>
  );
};

export default Home;
