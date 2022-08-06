import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Button, Stack, Paper, Rating } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import "./product-card.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl, color, material } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <Paper>
      <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`} />
        <Rating
          readOnly
          name="half-rating"
          defaultValue={4.5}
          precision={0.5}
        />
        <Stack sx={{ marginTop: "0.5rem" }}>
          <p>{name}</p>
          <p>
            ${price} <LocalOfferIcon />
          </p>
        </Stack>
        <p className="desc">
          description: Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. <br />
          <br />
          color: {color} <br />
          material: {material}
        </p>
        <Button size="small" variant="contained" onClick={addProductToCart}>
          Add to cart
        </Button>
      </div>
    </Paper>
  );
};

export default ProductCard;
