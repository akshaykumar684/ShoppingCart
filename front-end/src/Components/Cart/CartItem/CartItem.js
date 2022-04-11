import "./CartItem.css";
import apple from "../../../Resources/Images/apple.jpg";
import RoundButton from "../../UI/RoundButton/RoundButton";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../Store/CartStore/CartStore";

const CartItem = ({ productInCart }) => {
  const { name, price, quantity } = productInCart;
  const dispatch = useDispatch();

  const addItemInCart = () => {
    dispatch(cartActions.addProductInCart(productInCart));
  };

  const removeItemFromCart = () => {
    dispatch(cartActions.removeProductFromCart(productInCart));
  };

  return (
    <div className="productItem-container">
      <img src={apple} alt="product apple" />
      <div className="product-quantity">
        <h3>{name}</h3>
        <div>
          <RoundButton content="-" onClickHanlder={removeItemFromCart} />
          <span>{quantity}</span>
          <RoundButton content="+" onClickHanlder={addItemInCart} />
          <span>X</span>
          <span>{`Rs ${price}`}</span>
        </div>
      </div>
      <span>{`Rs ${price * quantity}`}</span>
    </div>
  );
};

export default CartItem;
