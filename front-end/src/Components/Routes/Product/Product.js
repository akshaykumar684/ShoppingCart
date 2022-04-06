import appleImg from "../../../Resources/Images/apple.jpg";
import "./Product.css";
import Button from "../../UI/Button";
const Product = () => {
  return (
    <main>
      <aside>
        <ul>
          <li>
            <a href="#">Fruits & Vegetables</a>
          </li>
          <li>
            <a href="#">Bakery Cakes and Diary</a>
          </li>
          <li>
            <a href="#">Beverages</a>
          </li>
          <li>
            <a href="#">Beauty and Hygiene </a>
          </li>
          <li>
            <a href="#">Baby Care</a>
          </li>
        </ul>
      </aside>
      <article className="product-container">
        <section className="product-card">
          <h1>Apple Washinton,Regular 4 Pcs</h1>
          <div className="produt-description">
            <img src={appleImg} alt="Common Hoope !" />
            <span>
              The bright red coloured and heart shaped Washinton apple are
              crunchy and juicy
            </span>
          </div>
          <Button title="Buy Now @ Rs 87 " />
        </section>
        <section className="product-card">
          <h1>Apple Washinton,Regular 4 Pcs</h1>
          <div className="produt-description">
            <img src={appleImg} alt="Common Hoope !" />
            <span>
              The bright red coloured and heart shaped Washinton apple are
              crunchy and juicy
            </span>
          </div>
          <Button title="Buy Now @ Rs 87 " />
        </section>
      </article>
    </main>
  );
};

export default Product;
