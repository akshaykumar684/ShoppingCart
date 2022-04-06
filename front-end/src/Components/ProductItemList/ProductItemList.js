import Styles from "./ProductItemList.module.css";
import ProductItem from "../ProductItem/ProductItem";
const ProductItemList = () => {
  return (
    <article className={Styles.productContainer}>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </article>
  );
};

export default ProductItemList;
