import "./CartHeader.css";
import CrossCloseButton from "../../UI/CrossCloseButton/CrossCloseButton";
const CartHeader = () => {
  return (
    <div className="cart-box-header">
      <h3>My Cart(1 item)</h3>
      <CrossCloseButton onCloseHandler={() => console.log("Modal Closed")} />
    </div>
  );
};

export default CartHeader;
