import Styles from "./CartFooter.module.css";
import CheckoutButton from "../../UI/CheckOutButton/CheckoutButton";
const CartFooter = ({ totalItemsPriceInCart, proceedToCheckOutHandler }) => {
  return (
    <div className={Styles.cartBoxFooter}>
      <p>Promo Code can be applied on Payment Page</p>
      <CheckoutButton
        checkoutmsg="Proceed to Check Out"
        totalamount={totalItemsPriceInCart}
        onCheckOutHandler={proceedToCheckOutHandler}
      />
    </div>
  );
};

export default CartFooter;
