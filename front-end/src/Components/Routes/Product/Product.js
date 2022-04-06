import appleImg from "../../../Resources/Images/apple.jpg";
import "./Product.css";
import Button from "../../UI/Button";
import SideNavBar from "../../NavBar/SideNavBar/SideNavBar";
const Product = () => {
  return (
    <main>
      <SideNavBar />
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
