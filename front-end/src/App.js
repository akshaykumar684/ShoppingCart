import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Components/Routes/Home/Home";
import Product from "./Components/Routes/Product/Product";
import NavBar from "./Components/NavBar/MainNavBar/NavBar";
import React from "react";
import Login from "./Components/Routes/Login/Login";
import Signup from "./Components/Routes/Signup/Signup";
import Modal from "./Components/Modal/Modal";
function App() {
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
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/cart" exact>
          <Modal />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
