import React from "react";
import ReactDOM from "react-dom";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
const Modal = () => {
  const totalItemInCarts = useSelector((state) => state.cart.totalItems);
  const productsInCarts = useSelector((state) => state.cart.productsInCart);
  console.log(`TotalItems in Cart : ${totalItemInCarts}`);
  console.log(`Products in Cart`);
  productsInCarts.forEach((element) => {
    console.log(element);
  });

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Cart />, document.getElementById("modal"))};
    </React.Fragment>
  );
};

export default Modal;
