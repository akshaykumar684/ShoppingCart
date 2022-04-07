import Styles from "./CartButton.module.css";
import cart from "../../../Resources/Images/cart.svg";

const CartButton = ({ onCartButtonClickedHandler, totalItemInCart }) => {
  return (
    <button className={Styles.cartButton} onClick={onCartButtonClickedHandler}>
      <img className={Styles.cartButtonImg} src={cart} alt="Cart" />
      <span
        className={Styles.cartButtonSpan}
      >{`${totalItemInCart} Items`}</span>
    </button>
  );
};

export default CartButton;
