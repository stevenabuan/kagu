import ProductCard from "../product-card/product-card";
import { Link } from "react-router-dom";
import "./category-preview.scss";
import { Grid, Box } from "@mui/material";

import React from "react";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <Box sx={{ marginBottom: "1rem" }}>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </Box>
      <Grid container columnSpacing={4}>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <Grid item xs={12} md={6} lg={3}>
              <ProductCard key={product.id} product={product} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default CategoryPreview;
