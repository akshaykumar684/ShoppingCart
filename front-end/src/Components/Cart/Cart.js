import "./Cart.css";
import close from "../../Resources/Images/Close-256.png";
import CartItemList from "./CartItemLists/CartItemLists";

const Cart = () => {
  return (
    <div className="cart-parent">
      <div className="cart-container">
        <div className="cart-box-header">
          <h3>My Cart(1 item)</h3>
          <button onClick={() => console.log("closed")}>
            <img src={close} alt="close" className="closeImg" />
          </button>
        </div>
        <CartItemList />

        <div className="cart-box-footer">
          <p>Promo Code can be applied on Payment Page</p>
          <button>
            <p>Proceed to Check Out</p>
            <p>Rs 187</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
