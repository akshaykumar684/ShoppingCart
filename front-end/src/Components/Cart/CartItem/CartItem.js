import "./CartItem.css";
import apple from "../../../Resources/Images/apple.jpg";
import RoundButton from "../../UI/RoundButton/RoundButton";
const CartItem = () => {
  return (
    <div className="productItem-container">
      <img src={apple} alt="Common Hoope !" />
      <div className="product-quantity">
        <h3>Apple-Washinton,Regular 4 Pcs</h3>
        <div>
          <RoundButton
            content="-"
            onClickHanlder={() => console.log("item removed")}
          />
          <span>1</span>
          <RoundButton
            content="+"
            onClickHanlder={() => console.log("item added")}
          />
          <span>X</span>
          <span>Rs 187</span>
        </div>
      </div>
      <span>Rs 187</span>
    </div>
  );
};

export default CartItem;
