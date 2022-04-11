import "./CartHeader.css";
import CrossCloseButton from "../../UI/CrossCloseButton/CrossCloseButton";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../Store/CartStore/CartStore";

const CartHeader = () => {
  const disptach = useDispatch();
  const totalItemsInCart = useSelector((state) => state.cart.totalItems);

  const hideCartModal = () => {
    disptach(cartActions.toggleCart());
  };
  return (
    <div className="cart-box-header">
      <h3>{`My Cart(${totalItemsInCart} item)`}</h3>
      <CrossCloseButton onCloseHandler={hideCartModal} />
    </div>
  );
};

export default CartHeader;
