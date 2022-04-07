import "./Cart.css";
import CartItemList from "./CartItemLists/CartItemLists";
import CartHeader from "./CartHeader/CartHeader";
import CartFooter from "./CartFooter/CartFooter";
const Cart = () => {
  return (
    <div className="cart-parent">
      <div className="cart-container">
        <CartHeader />
        <CartItemList />
        <CartFooter />
      </div>
    </div>
  );
};

export default Cart;
