import Styles from "./ProductItemList.module.css";
import ProductItem from "../ProductItem/ProductItem";
import { useSelector } from "react-redux";
const ProductItemList = () => {
  const isProductLoaded = useSelector((state) => state.product.isLoaded);
  const products = useSelector((state) => state.product.products);
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
