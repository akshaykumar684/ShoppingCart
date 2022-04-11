import "./Product.css";
import SideNavBar from "../../NavBar/SideNavBar/SideNavBar";
import ProductItemList from "../../ProductItemList/ProductItemList";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { productSliceAction } from "../../../Store/ProductsStore/ProductsStoreSlice";
import axiosFetch from "../../../axios/axios-congig";
import { useDispatch } from "react-redux";

const Product = () => {
  const disptach = useDispatch();

  useEffect(() => {
    axiosFetch(`/products`)
      .then((res) => {
        const { status, data } = res;
        if (status === 200) {
          const product = data.map((p) => {
            return { ...p, quantity: 0 };
          });
          disptach(productSliceAction.loadProducts(product));
        }
      })
      .catch((err) => console.log(err));
  }, [disptach]);
  const { productCategoryId } = useParams();
  return (
    <main>
      <SideNavBar />
      <ProductItemList productCategoryId={productCategoryId} />
    </main>
  );
};

export default Product;
