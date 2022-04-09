import "./Home.css";

import ProductCategoryLists from "../../ProductCategoryLists/ProductCategoryLists";
import BannerCarousel from "../../UI/BannerCarousel/BannerCarousel";
const Home = () => {
  return (
    <main className="mainContainer">
      <article className="articleContainer">
        <BannerCarousel />

        <ProductCategoryLists />
      </article>
    </main>
  );
};

export default Home;
