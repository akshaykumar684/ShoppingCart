import Styles from "./CartFooter.module.css";
import CheckoutButton from "../../UI/CheckOutButton/CheckoutButton";
const CartFooter = () => {
  return (
    <div className={Styles.cartBoxFooter}>
      <p>Promo Code can be applied on Payment Page</p>
      <CheckoutButton
        checkoutmsg="Proceed to Check Out"
        totalamount="100"
        onCheckOutHandler={() => console.log("Checked Out")}
      />
    </div>
  );
};

export default CartFooter;
