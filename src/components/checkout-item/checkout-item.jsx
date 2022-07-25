import { useContext } from "react";
import "./checkout-item.scss";
import CloseIcon from "@mui/icons-material/Close";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="qunatity">
        <div className="arrow" onClick={removeItemHandler}>
          &lt;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &gt;
        </div>
      </span>
      <span className="price"> {price} </span>
      <div className="remove-button" onClick={clearItemHandler}>
        <CloseIcon />
      </div>
    </div>
  );
};

export default CheckoutItem;

// &lt; &gt;
