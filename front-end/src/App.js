import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Routes/Home/Home";
import Product from "./Components/Routes/Product/Product";
import NavBar from "./Components/NavBar/NavBar";
import React from "react";
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/product" exact>
          <Product />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
