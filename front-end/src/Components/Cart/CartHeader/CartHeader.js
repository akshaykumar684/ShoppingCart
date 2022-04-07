import "./CartHeader.css";
import close from "../../../Resources/Images/Close-256.png";

const CartHeader = () => {
  return (
    <div className="cart-box-header">
      <h3>My Cart(1 item)</h3>
      <button onClick={() => console.log("closed")}>
        <img src={close} alt="close" className="closeImg" />
      </button>
    </div>
  );
};

export default CartHeader;
