import "./Cart.css";
import CartItemList from "./CartItemLists/CartItemLists";
import CartHeader from "./CartHeader/CartHeader";
import CartFooter from "./CartFooter/CartFooter";
import { useSelector } from "react-redux";
const Cart = () => {
  const totalItemsPriceInCart = useSelector(
    (state) => state.cart.totalItemsPriceInCart
  );
  return (
    <div className="cart-parent">
      <div className="cart-container">
        <CartHeader />
        <CartItemList />
        <CartFooter totalItemsPriceInCart={totalItemsPriceInCart} />
      </div>
    </div>
  );
};

export default Cart;
