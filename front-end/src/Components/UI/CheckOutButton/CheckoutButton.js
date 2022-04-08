import Styles from "./CheckoutButton.module.css";

const CheckoutButton = ({ checkoutmsg, totalamount, onCheckOutHandler }) => {
  return (
    <button className={Styles.checkOutButton} onClick={onCheckOutHandler}>
      <p>{checkoutmsg}</p>
      <p>{`Rs ${totalamount}`}</p>
      {/* <p>Start shopping</p> */}
    </button>
  );
};

export default CheckoutButton;
