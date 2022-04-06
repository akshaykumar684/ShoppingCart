import Beverages from "../../Resources/Images/beverages.png";
import Button from "../UI/Button";
import Styles from "./ProductCategory.module.css";

const ProductCategory = () => {
  return (
    <section className={Styles.category}>
      <img className={Styles.categoryImg} src={Beverages} alt="Offer" />
      <div className={Styles.productDescription}>
        <h3>Beverages</h3>
        <p>
          Our beverage department will ensure your fridge is fully stocked.Shop
          for Soda,juice,beer and many more.
        </p>
        <Button
          title="Explore Beverages"
          onClickHandler={() => console.log("btn clicked")}
        />
      </div>
    </section>
  );
};

export default ProductCategory;
