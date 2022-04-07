import "./ProductCategoryLists.css";
import React from "react";
import ProductCategory from "../ProductCategory/ProductCategory";
import { useSelector } from "react-redux";
const ProductCategoryLists = () => {
  const isProductCategoriesLoading = useSelector(
    (state) => state.productCategories.isLoaded
  );
  const productCategories = useSelector(
    (state) => state.productCategories.productCategories
  );
  return (
    <React.Fragment>
      {!isProductCategoriesLoading && <h1>Loading Product Categories</h1>}
      {isProductCategoriesLoading &&
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
