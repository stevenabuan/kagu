import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../store/cart/cart.selector";

import "./cart-dropdown.scss";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <p className="empty-message">Your cart is empty</p>
        )}
      </div>
      <Button variant="contained" onClick={goToCheckoutHandler}>
        Checkout
      </Button>
    </div>
  );
};

export default CartDropdown;
