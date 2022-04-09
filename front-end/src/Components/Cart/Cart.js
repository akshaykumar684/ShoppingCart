import "./Cart.css";
import CartItemList from "./CartItemLists/CartItemLists";
import CartHeader from "./CartHeader/CartHeader";
import CartFooter from "./CartFooter/CartFooter";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../Store/CartStore/CartStore";
import { useHistory } from "react-router-dom";
import axiosFetch from "../../axios/axios-congig";

const Cart = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const totalItemsPriceInCart = useSelector(
    (state) => state.cart.totalItemsPriceInCart
  );

  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  const proceedToCheckOutHandler = () => {
    if (!isLoggedIn) {
      dispatch(cartActions.toggleCart());
      history.push("/login");
      return;
    }
    axiosFetch
      .post("/addToCart")
      .then((response) => {
        const { status, data } = response;
        if (status === 200) {
          dispatch(cartActions.toggleCart());
          alert(data.responseMessage);
        }
      })
      .catch((error) => {
        alert("Something Went Wrong.");
      });
  };
  return (
    <div className="cart-parent">
      <div className="cart-container">
        <CartHeader />
        <CartItemList />
        <CartFooter
          totalItemsPriceInCart={totalItemsPriceInCart}
          proceedToCheckOutHandler={proceedToCheckOutHandler}
        />
      </div>
    </div>
  );
};

export default Cart;
