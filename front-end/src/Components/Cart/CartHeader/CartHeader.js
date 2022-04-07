import "./CartHeader.css";
import CrossCloseButton from "../../UI/CrossCloseButton/CrossCloseButton";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../Store/Redux-store";
const CartHeader = () => {
  const disptach = useDispatch();
  const hideCartModal = () => {
    disptach(cartActions.toggleCart());
  };
  return (
    <div className="cart-box-header">
      <h3>My Cart(1 item)</h3>
      <CrossCloseButton onCloseHandler={hideCartModal} />
    </div>
  );
};

export default CartHeader;
