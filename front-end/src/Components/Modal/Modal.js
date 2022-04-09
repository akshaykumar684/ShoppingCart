import React from "react";
import ReactDOM from "react-dom";
import Cart from "../Cart/Cart";
const Modal = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Cart />, document.getElementById("modal"))};
    </React.Fragment>
  );
};

export default Modal;
