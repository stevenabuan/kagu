import ProductCard from "../product-card/product-card";

import { Link } from "react-router-dom";
import { Grid, Box } from "@mui/material";

import "./category-preview.scss";

import React from "react";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <Box sx={{ marginBottom: "1rem" }}>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </Box>
      <Grid container spacing={4}>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default CategoryPreview;
