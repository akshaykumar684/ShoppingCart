import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import NavBar from "./Components/NavBar/NavBar";
import React from "react";
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/product" exact>
            <Product />
          </Route>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
