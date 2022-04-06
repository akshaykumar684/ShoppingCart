import logo from "../../Resources/Images/logo.png";
import cart from "../../Resources/Images/cart.svg";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <header>
      <div className="header-container">
        <img src={logo} alt="Sabka Bazar" className="logo-img" />
        <div>
          <nav className="home-product-nav">
            <ul>
              <li>
                <NavLink to="/Home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/product">Products</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="sigin-cart-container">
          <div>
            <ul>
              <li>
                <a href="#">SignIn</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
            </ul>
          </div>
          <button className="cart-button">
            <img src={cart} alt="Common Hoope !" />
            <span>0 Items</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
