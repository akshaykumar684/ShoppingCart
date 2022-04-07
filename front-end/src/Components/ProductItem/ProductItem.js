import Styles from "./ProductItem.module.css";
import Button from "../UI/Button";
import appleImg from "../../Resources/Images/apple.jpg";

const ProductItem = ({ name, description, price }) => {
  return (
    <section className={Styles.productCard}>
      <h1 className={Styles.productCardHeader}>{name}</h1>
      <div className={Styles.produtDescription}>
        <img
          className={Styles.produtDescriptionImg}
          src={appleImg}
          alt="Common Hoope !"
        />
        <span>{description}</span>
      </div>
      <Button
        title={`Buy Now @ Rs ${price}`}
        onClickHandler={() => console.log("Clicked")}
      />
    </section>
  );
};

export default ProductItem;
