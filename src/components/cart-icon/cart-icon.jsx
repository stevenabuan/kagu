import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import "./cart-icon.scss";

import React from "react";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <Badge badgeContent={0} showZero color="primary">
        <ShoppingCartOutlinedIcon />
      </Badge>

      {/* <span className="item-count">0</span> */}
    </div>
  );
};

export default CartIcon;
