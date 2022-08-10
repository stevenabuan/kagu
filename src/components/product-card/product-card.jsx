import { useState } from "react";

import { useDispatch, useSelector } from "react-redux/es/exports";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import { Button, Stack, Paper, Rating, Modal, Box } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CheckIcon from "@mui/icons-material/Check";

import "./product-card.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 10,
  p: 1.5,
  textAlign: "center",
};

const ProductCard = ({ product }) => {
  const { name, price, imageUrl, color, material } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const onClick = () => {
    addProductToCart();
    handleOpen();
  };

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Paper elevation={3}>
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
        <Button size="small" variant="contained" onClick={onClick}>
          Add to cart
        </Button>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <p>
              added to cart <CheckIcon sx={{ paddingTop: "0.5rem" }} />
            </p>
          </Box>
        </Modal>
      </div>
    </Paper>
  );
};

export default ProductCard;
