import logo from "../../../Resources/Images/logo.png";
import { NavLink } from "react-router-dom";
import Styles from "./NavBar.module.css";
import CartButton from "../../UI/CartButton/CartButton";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../Store/Redux-store";
const NavBar = () => {
  const disptach = useDispatch();
  const totalItemsInCart = useSelector((state) => state.cart.totalItems);

  const showCartModal = () => {
    disptach(cartActions.toggleCart());
  };
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
                <NavLink activeClassName={Styles.selectedRoute} to="/login">
                  SignIn
                </NavLink>
              </li>
              <li className={Styles.siginCartContainerListItem}>
                <NavLink activeClassName={Styles.selectedRoute} to="/signup">
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
          <CartButton
            onCartButtonClickedHandler={showCartModal}
            totalItemInCart={totalItemsInCart}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
