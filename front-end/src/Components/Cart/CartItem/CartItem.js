import "./CartItem.css";
import apple from "../../../Resources/Images/apple.jpg";

const CartItem = () => {
  return (
    <div className="productItem-container">
      <img src={apple} alt="Common Hoope !" />
      <div className="product-quantity">
        <h3>Apple-Washinton,Regular 4 Pcs</h3>
        <div>
          <button className="add-remove-button">-</button>
          <span>1</span>
          <button className="add-remove-button">+</button>
          <span>X</span>
          <span>Rs 187</span>
        </div>
      </div>
      <span>Rs 187</span>
    </div>
  );
};

export default CartItem;
