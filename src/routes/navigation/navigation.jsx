import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";

import { Tooltip, Container, Divider } from "@mui/material";
import mainLogo from "../../assets/kagu-main-logo.png";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import "./navigation.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
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
                <SearchIcon />
              </Link>
            </Tooltip>

            <Tooltip title="shopping cart">
              <CartIcon />
            </Tooltip>

            {currentUser ? (
              <Tooltip title="sign-out">
                <Link className="nav-link" onClick={signOutUser} to={"/"}>
                  <LogoutIcon />
                </Link>
              </Tooltip>
            ) : (
              <Tooltip title="sign-in">
                <Link className="nav-link" to={"/signin"}>
                  <LoginIcon />
                </Link>
              </Tooltip>
            )}
          </div>
          {isCartOpen && <CartDropdown />}
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