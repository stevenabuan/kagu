import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import ProductCard from "../../components/product-card/product-card";
import { CategoriesContext } from "../../contexts/categories.context";
import "./category.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <div>
      <p className="category-title">{category.toUpperCase()}</p>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Category;
