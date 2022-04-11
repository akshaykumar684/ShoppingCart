import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Components/Routes/Home/Home";
import Product from "./Components/Routes/Product/Product";
import NavBar from "./Components/NavBar/MainNavBar/NavBar";
import React, { useEffect } from "react";
import Login from "./Components/Routes/Login/Login";
import Signup from "./Components/Routes/Signup/Signup";
import Modal from "./Components/Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import axiosFetch from "./axios/axios-congig";
import { productSliceAction } from "./Store/ProductsStore/ProductsStoreSlice";
import { productCategoriesAction } from "./Store/ProductCategoryStore/ProductCategoryStoreSlice";
import Footer from "./Components/Footer/Footer";

function App() {
  const disptach = useDispatch();
  useEffect(() => {
    Promise.all([
      (axiosFetch(`/products`)
        .then((res) => {
          const { status, data } = res;
          if (status === 200) {
            const product = data.map((p) => {
              return { ...p, quantity: 0 };
            });
            disptach(productSliceAction.loadProducts(product));
          }
        })
        .catch((err) => console.log(err)),
      axiosFetch(`/categories`)
        .then((res) => {
          const { status, data } = res;
          if (status === 200) {
            disptach(productCategoriesAction.loadProductCategories(data));
          }
        })
        .catch((err) => console.log(err))),
    ]);
  }, [disptach]);
  const isCartVisible = useSelector((state) => state.cart.isCartVisible);
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/product" exact>
          <Product />
        </Route>
        <Route path="/product/:productCategoryId" exact>
          <Product />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="*">
          <Redirect to="/home" />
        </Route>
      </Switch>
      <Footer />
      {isCartVisible && <Modal />}
    </React.Fragment>
  );
}

export default App;
