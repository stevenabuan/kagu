import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card";
import { Box } from "@mui/material";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

import "./category.scss";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <p className="category-title">{category.toUpperCase()}</p>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      <Box
        sx={{
          textAlign: "center",
          padding: "2rem 0",
        }}
      >
        <a className="back-to-home" href="/">
          back to home
        </a>
      </Box>
    </Fragment>
  );
};

export default Category;
