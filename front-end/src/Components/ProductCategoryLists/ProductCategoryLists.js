import "./ProductCategoryLists.css";
import React from "react";
import ProductCategory from "../ProductCategory/ProductCategory";
import { useSelector } from "react-redux";

const ProductCategoryLists = () => {
  const isProductCategoriesLoaded = useSelector(
    (state) => state.productCategories.isLoaded
  );

  const productCategories = useSelector(
    (state) => state.productCategories.productCategories
  );

  return (
    <React.Fragment>
      {!isProductCategoriesLoaded && <h1>Loading Product Categories</h1>}
      {isProductCategoriesLoaded &&
        productCategories.map((productCategory) => (
          <ProductCategory
            key={productCategory.id}
            name={productCategory.name}
            description={productCategory.description}
            imageUrl={productCategory.imageUrl}
            enabled={productCategory.enabled}
            productCategoryId={productCategory.id}
          />
        ))}
    </React.Fragment>
  );
};

export default ProductCategoryLists;
