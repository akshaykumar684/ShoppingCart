import Styles from "./ProductItem.module.css";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/CartStore/CartStore";

const ProductItem = ({ product }) => {
  const { name, description, price, imageURL } = product;
  const dispatch = useDispatch();
  const addItemInCart = () => {
    dispatch(cartActions.addProductInCart({ ...product }));
  };

  return (
    <section className={Styles.productCard}>
      <h1 className={Styles.productCardHeader}>{name}</h1>
      <div className={Styles.produtDescription}>
        <img
          className={Styles.produtDescriptionImg}
          src={imageURL}
          alt="product-apple"
        />
        <span className={Styles.description}>{description}</span>
      </div>
      <Button title={`Buy Now @ Rs ${price}`} onClickHandler={addItemInCart} />
    </section>
  );
};

export default ProductItem;
