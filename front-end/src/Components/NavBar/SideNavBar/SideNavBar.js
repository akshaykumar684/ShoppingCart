import Styles from "./SideNavBar.module.css";
import { NavLink } from "react-router-dom";
const SideNavBar = () => {
  return (
    <aside className={Styles.container}>
      <ul>
        <li className={Styles.listContainer}>
          <NavLink activeClassName={Styles.selectedRoute} to="/Home">
            Fruits & Vegetables
          </NavLink>
        </li>
        <li className={Styles.listContainer}>
          <NavLink activeClassName={Styles.selectedRoute} to="/Home">
            Bakery Cakes and Diary
          </NavLink>
        </li>
        <li className={Styles.listContainer}>
          <NavLink activeClassName={Styles.selectedRoute} to="/Home">
            Beverages
          </NavLink>
        </li>
        <li className={Styles.listContainer}>
          <NavLink activeClassName={Styles.selectedRoute} to="/Home">
            Beauty and Hygiene
          </NavLink>
        </li>
        <li className={Styles.listContainer}>
          <NavLink activeClassName={Styles.selectedRoute} to="/Home">
            Baby Care
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideNavBar;
