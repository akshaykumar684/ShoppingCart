import "./Cart.css";
import close from "../../Resources/Images/Close-256.png";
import apple from "../../Resources/Images/apple.jpg";

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart-box-header">
        <h3>My Cart(1 item)</h3>
        <button>
          <img src={close} alt="close" className="closeImg" />
        </button>
      </div>
      <div className="productItem-container-coll">
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
      </div>

      <div className="cart-box-footer">
        <p>Promo Code can be applied on Payment Page</p>
        <button>
          <p>Proceed to Check Out</p>
          <p>Rs 187</p>
        </button>
      </div>
    </div>
  );
};

export default Cart;
