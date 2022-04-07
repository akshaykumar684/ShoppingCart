import React from "react";
import ReactDOM from "react-dom";
import Cart from "../Cart/Cart";
import { useEffect } from "react";

const Modal = () => {
  useEffect(() => {
    document.body.setAttribute("style", "overflow:hidden");
    return () => document.body.setAttribute("style", "overflow:auto");
  }, []);
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Cart />, document.getElementById("modal"))};
    </React.Fragment>
  );
};

export default Modal;
