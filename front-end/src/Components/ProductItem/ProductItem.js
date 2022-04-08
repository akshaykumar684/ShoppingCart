import Styles from "./ProductItem.module.css";
import Button from "../UI/Button";
import appleImg from "../../Resources/Images/apple.jpg";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/CartStore/CartStore";

const ProductItem = ({ product }) => {
  const { name, description, price } = product;
  const dispatch = useDispatch();
  //console.log(product);
  const addItemInCart = () => {
    dispatch(cartActions.addProductInCart({ ...product }));
  };
  return (
    <section className={Styles.productCard}>
      <h1 className={Styles.productCardHeader}>{name}</h1>
      <div className={Styles.produtDescription}>
        <img
          className={Styles.produtDescriptionImg}
          src={appleImg}
          alt="Common Hoope !"
        />
        <span className={Styles.description}>{description}</span>
      </div>
      <Button title={`Buy Now @ Rs ${price}`} onClickHandler={addItemInCart} />
    </section>
  );
};

export default ProductItem;
