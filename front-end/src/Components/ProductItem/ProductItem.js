import Styles from "./ProductItem.module.css";
import Button from "../UI/Button";
import appleImg from "../../Resources/Images/apple.jpg";

const ProductItem = () => {
  return (
    <section className={Styles.productCard}>
      <h1 className={Styles.productCardHeader}>
        Apple Washinton,Regular 4 Pcs
      </h1>
      <div className={Styles.produtDescription}>
        <img
          className={Styles.produtDescriptionImg}
          src={appleImg}
          alt="Common Hoope !"
        />
        <span>
          The bright red coloured and heart shaped Washinton apple are crunchy
          and juicy
        </span>
      </div>
      <Button
        title="Buy Now @ Rs 87 "
        onClickHandler={() => console.log("Clicked")}
      />
    </section>
  );
};

export default ProductItem;
