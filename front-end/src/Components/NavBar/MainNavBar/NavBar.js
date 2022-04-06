import logo from "../../../Resources/Images/logo.png";
import cart from "../../../Resources/Images/cart.svg";
import { NavLink } from "react-router-dom";
import Styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <header>
      <div className={Styles.headerContainer}>
        <img src={logo} alt="Sabka Bazar" className={Styles.logoImg} />
        <div>
          <nav className={Styles.homeProductNav}>
            <ul>
              <li className={Styles.homeProductNavListItem}>
                <NavLink activeClassName={Styles.selectedRoute} to="/Home">
                  Home
                </NavLink>
              </li>
              <li className={Styles.homeProductNavListItem}>
                <NavLink activeClassName={Styles.selectedRoute} to="/product">
                  Products
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className={Styles.siginCartContainer}>
          <div>
            <ul>
              <li className={Styles.siginCartContainerListItem}>
                <NavLink activeClassName={Styles.selectedRoute} to="/Home">
                  SignIn
                </NavLink>
              </li>
              <li className={Styles.siginCartContainerListItem}>
                <NavLink activeClassName={Styles.selectedRoute} to="/Home">
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
          <button className={Styles.cartButton}>
            <img className={Styles.cartButtonImg} src={cart} alt="Cart" />
            <span className={Styles.cartButtonSpan}>0 Items</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
