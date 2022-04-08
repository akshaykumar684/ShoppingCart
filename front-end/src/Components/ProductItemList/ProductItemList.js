import Styles from "./ProductItemList.module.css";
import ProductItem from "../ProductItem/ProductItem";
import { useSelector } from "react-redux";
const ProductItemList = ({ productCategoryId }) => {
  const isProductLoaded = useSelector((state) => state.product.isLoaded);
  let products = useSelector((state) => state.product.products);
  if (isProductLoaded && productCategoryId) {
    products = products.filter((p) => p.category === productCategoryId);
  }
  return (
    <article className={Styles.productContainer}>
      {!isProductLoaded && <h1>Loading Products...</h1>}
      {isProductLoaded &&
        products.map((product) => (
          <ProductItem
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
    </article>
  );
};

export default ProductItemList;
