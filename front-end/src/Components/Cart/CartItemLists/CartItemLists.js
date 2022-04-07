import Styles from "./CartItemList.module.css";
import CartItem from "../CartItem/CartItem";

const CartItemList = () => {
  return (
    <div className={Styles.productItemContainerColl}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
        <CartItem key={index} />
      ))}
    </div>
  );
};

export default CartItemList;
