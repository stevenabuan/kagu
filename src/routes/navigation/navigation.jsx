import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import {
  Tooltip,
  Container,
  Divider,
  // AppBar,
  // Toolbar,
  // IconButton,
  // Typography,
} from "@mui/material";
import mainLogo from "../../assets/kagu-main-logo.png";
// import ChairSharpIcon from "@mui/icons-material/ChairSharp";
import "./navigation.scss";

const Navigation = () => {
  return (
    <Fragment>
      {/* <Container maxWidth="xl">
        <AppBar position="static" color="inherit">
          <Toolbar>
            <IconButton size="large" edge="start">
              <ChairSharpIcon />
            </IconButton>
            <Typography variant="h6" component="div">
              KAGU
            </Typography>
          </Toolbar>
        </AppBar>
      </Container> */}

      <Container maxWidth="xl">
        <div className="navigation">
          <Link className="logo-container" to={"/"}>
            <img
              src={mainLogo}
              alt="kagu-main-logo"
              style={{ height: "2.5rem" }}
            />
          </Link>
          <div className="nav-links-container">
            <div>
              <Link className="nav-link" to={"/shop"}>
                shop
              </Link>
            </div>
            <Tooltip title="contact">
              <Link className="nav-link" to={"/contact"}>
                contact
              </Link>
            </Tooltip>
            <Tooltip title="search">
              <Link className="nav-link" to={"/search"}>
                <i class="fa-solid fa-magnifying-glass"></i>
              </Link>
            </Tooltip>
            <Tooltip title="sign-in">
              <Link className="nav-link" to={"/signin"}>
                <i class="fa-solid fa-user"></i>
              </Link>
            </Tooltip>

            <Tooltip title="shopping cart">
              <Link className="nav-link" to={"/cart"}>
                <i class="fas fa-shopping-cart"></i>
              </Link>
            </Tooltip>
          </div>
        </div>

        <Divider variant="middle" textAlign="center" sx={{ maxWidth: "xl" }} />

        <div className="mid-navlinks-container">
          <div>
            <Link className="nav-link" to={"/livingroom"}>
              livingroom
            </Link>
          </div>
          <div>
            <Link className="nav-link" to={"/bedroom"}>
              bedroom
            </Link>
          </div>
          <div>
            <Link className="nav-link" to={"/diningroom"}>
              diningroom
            </Link>
          </div>
          <div>
            <Link className="nav-link" to={"/office"}>
              office
            </Link>
          </div>
          <div>
            <Link className="nav-link" to={"/decors"}>
              decors
            </Link>
          </div>
        </div>

        <Outlet />
      </Container>
    </Fragment>
  );
};

export default Navigation;
