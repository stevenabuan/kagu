import { useContext } from "react";
import "./checkout-item.scss";
import CloseIcon from "@mui/icons-material/Close";
import { CartContext } from "../../contexts/cart.context";
import { Button, Box } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

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
