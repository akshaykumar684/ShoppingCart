import "./ProductCategoryLists.css";
import React, { useEffect, useState } from "react";
import axiosFetch from "../../axios/axios-congig";
import ProductCategory from "../ProductCategory/ProductCategory";

const ProductCategoryLists = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productCategories, setProductCategores] = useState([]);
  useEffect(() => {
    axiosFetch(`/categories`).then((res) => {
      setProductCategores(res.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <React.Fragment>
      {isLoading && <h1>Loading Product Categories</h1>}
      {!isLoading &&
        productCategories.map((productCategory) => (
          <ProductCategory
            key={productCategory.id}
            name={productCategory.name}
            description={productCategory.description}
            imageUrl={productCategory.imageUrl}
            enabled={productCategory.enabled}
          />
        ))}
    </React.Fragment>
  );
};

export default ProductCategoryLists;
