import Beverages from "../../Resources/Images/beverages.png";
import Button from "../UI/Button";
import Styles from "./ProductCategory.module.css";
import { useHistory } from "react-router-dom";

const ProductCategory = ({
  name,
  description,
  enabled,
  imageUrl,
  productCategoryId,
}) => {
  const history = useHistory();
  const navigateToProductCategory = () => {
    history.push(`/product/${productCategoryId}`);
  };

  return (
    <section className={Styles.category}>
      <img className={Styles.categoryImg} src={Beverages} alt="Offer" />
      <div className={Styles.productDescription}>
        <h3>{name}</h3>
        <p>{description}</p>
        <Button
          isdisabled={!enabled}
          title={`Explore ${name}`}
          onClickHandler={navigateToProductCategory}
        />
      </div>
    </section>
  );
};

export default ProductCategory;
