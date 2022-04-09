import logo from "../../../Resources/Images/logo.png";
import { NavLink } from "react-router-dom";
import Styles from "./NavBar.module.css";
import CartButton from "../../UI/CartButton/CartButton";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../Store/CartStore/CartStore";
import { userActions } from "../../../Store/UserStroe/UserStore";
import LogOutButton from "../../UI/LogOutButton/LogOutButton";
const NavBar = () => {
  const disptach = useDispatch();
  const totalItemsInCart = useSelector((state) => state.cart.totalItems);
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  const loggedInUserName = useSelector(
    (state) => state.users.currentLoggedInUserName
  );

  const showCartModal = () => {
    disptach(cartActions.toggleCart());
  };

  const logOutUserHandler = () => {
    disptach(userActions.logOutUser());
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
            {isLoggedIn === true ? (
              <>
                <span>{`Welcome ${loggedInUserName}`}</span>
                <LogOutButton onLogoutClickHandler={logOutUserHandler} />
              </>
            ) : (
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
            )}
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
