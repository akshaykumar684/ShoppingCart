import Beverages from "../../Resources/Images/beverages.png";
import Button from "../UI/Button";
import Styles from "./ProductCategory.module.css";

//const baseUrl = "http://localhost:3000";
const ProductCategory = ({ name, description, enabled, imageUrl }) => {
  //console.log(baseUrl.concat(imageUrl));
  return (
    <section className={Styles.category}>
      <img className={Styles.categoryImg} src={Beverages} alt="Offer" />
      <div className={Styles.productDescription}>
        <h3>{name}</h3>
        <p>{description}</p>
        <Button
          isdisabled={!enabled}
          title="Explore Beverages"
          onClickHandler={() => console.log("btn clicked")}
        />
      </div>
    </section>
  );
};

export default ProductCategory;
