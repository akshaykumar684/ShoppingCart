import React from "react";
import ReactDOM from "react-dom";
import Cart from "../Cart/Cart";
import { useEffect } from "react";
import axios from "../../axios/axios-congig";

const Modal = () => {
  useEffect(() => {
    document.body.setAttribute("style", "overflow:hidden");
    axios
      .get(`/banners`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    return () => document.body.setAttribute("style", "overflow:auto");
  }, []);
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Cart />, document.getElementById("modal"))};
    </React.Fragment>
  );
};

export default Modal;
