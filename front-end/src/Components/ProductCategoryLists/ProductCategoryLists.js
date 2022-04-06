import "./ProductCategoryLists.css";

import ProductCategory from "../Category/ProductCategory";

const CategoryLists = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7].map((num, index) => (
        <ProductCategory key={index} />
      ))}
    </>
  );
};

export default CategoryLists;
