import Styles from "./CartItemList.module.css";
import CartItem from "../CartItem/CartItem";
import { useSelector } from "react-redux";
const CartItemList = () => {
  const totalItemInCarts = useSelector((state) => state.cart.totalItems);
  const productsInCarts = useSelector((state) => state.cart.productsInCart);
  return (
    <div className={Styles.productItemContainerColl}>
      {totalItemInCarts === 0 && <h3>Please start shopping</h3>}
      {totalItemInCarts !== 0 &&
        productsInCarts.map((productInCart) => (
          <CartItem key={productInCart.id} productInCart={productInCart} />
        ))}
    </div>
  );
};

export default CartItemList;
