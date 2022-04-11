import Styles from "./SideNavBar.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const SideNavBar = () => {
  const isProductCategoriesLoaded = useSelector(
    (state) => state.productCategories.isLoaded
  );

  const productCategories = useSelector(
    (state) => state.productCategories.productCategories
  );

  return (
    <aside className={Styles.container}>
      {isProductCategoriesLoaded && (
        <ul>
          {productCategories
            .filter((productCategory) => productCategory.enabled)
            .map((productCategory) => (
              <li className={Styles.listContainer} key={productCategory.id}>
                <NavLink
                  activeClassName={Styles.selectedRoute}
                  to={`/product/${productCategory.id}`}
                >
                  {productCategory.name}
                </NavLink>
              </li>
            ))}
        </ul>
      )}
    </aside>
  );
};

export default SideNavBar;
