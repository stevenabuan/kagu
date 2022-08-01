import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Button, Stack } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import "./product-card.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <Stack sx={{ marginTop: "1rem" }}>
        <p>{name}</p>
        <p>
          ${price} <LocalOfferIcon />
        </p>
      </Stack>
      <Button size="small" variant="contained" onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
