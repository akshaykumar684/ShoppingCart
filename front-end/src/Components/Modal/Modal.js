import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Cart from "../Cart/Cart";
const Modal = () => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = ""); //check
  }, []);

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Cart />, document.getElementById("modal"))};
    </React.Fragment>
  );
};

export default Modal;
