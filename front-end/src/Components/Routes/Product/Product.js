import "./Product.css";
import SideNavBar from "../../NavBar/SideNavBar/SideNavBar";
import ProductItemList from "../../ProductItemList/ProductItemList";
import { useParams } from "react-router-dom";
const Product = () => {
  const params = useParams();
  console.log(params);
  return (
    <main>
      <SideNavBar />
      <ProductItemList />
    </main>
  );
};

export default Product;
