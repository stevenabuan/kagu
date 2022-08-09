import { useSelector, useDispatch } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";

import CloseIcon from "@mui/icons-material/Close";
import { Button, Box } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import "./checkout-item.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <div className="checkout-item-container">
      <img className="checkout-img" src={imageUrl} alt={`${name}`} />

      <span className="name">{name}</span>
      <Box className="quantity-container">
        <Button onClick={removeItemHandler}>
          <RemoveIcon />
        </Button>
        {quantity}
        <Button onClick={addItemHandler}>
          <AddIcon />
        </Button>
      </Box>
      <span className="price"> {price} </span>
      <Button onClick={clearItemHandler}>
        <CloseIcon />
      </Button>
    </div>
  );
};

export default CheckoutItem;
