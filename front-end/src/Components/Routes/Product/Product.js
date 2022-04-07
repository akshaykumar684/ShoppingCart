import "./Product.css";
import SideNavBar from "../../NavBar/SideNavBar/SideNavBar";
import ProductItemList from "../../ProductItemList/ProductItemList";
import { useParams } from "react-router-dom";
const Product = () => {
  const { productCategoryId } = useParams();
  return (
    <main>
      <SideNavBar />
      <ProductItemList productCategoryId={productCategoryId} />
    </main>
  );
};

export default Product;
