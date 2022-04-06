import "./ProductCategoryLists.css";

import ProductCategory from "../ProductCategory/ProductCategory";

const ProductCategoryLists = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7].map((num, index) => (
        <ProductCategory key={index} />
      ))}
    </>
  );
};

export default ProductCategoryLists;
