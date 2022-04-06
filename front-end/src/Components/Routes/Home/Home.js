import Offer5 from "../../../Resources/Images/offer5.jpg";

import "./Home.css";

import ProductCategoryLists from "../../ProductCategoryLists/ProductCategoryLists";
const Home = () => {
  return (
    <main className="mainContainer">
      <article className="articleContainer">
        <img src={Offer5} alt="Common Hoope !" className="offerImg" />
        <ProductCategoryLists />
      </article>
    </main>
  );
};

export default Home;
