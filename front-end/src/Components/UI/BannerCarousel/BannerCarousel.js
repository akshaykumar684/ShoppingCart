import "./BannerCarousel.css";
import { useState, useEffect } from "react";
import Offer5 from "../../../Resources/Images/offer5.jpg";
import axiosFetch from "../../../axios/axios-congig";

const BannerCarousel = () => {
  const [isBannerLoaded, setIsBannerLoaded] = useState(false);
  const [banners, setBanners] = useState(null);

  useEffect(() => {
    axiosFetch(`/banners`)
      .then((res) => {
        const { status, data } = res;
        if (status === 200) {
          console.log(data);
          setBanners(data);
          setIsBannerLoaded(true);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="slides">
      {!isBannerLoaded && <p>Loading...</p>}
      {isBannerLoaded &&
        banners.map((banner) => (
          <img
            key={banner.id}
            src={Offer5}
            alt="offer banner"
            className="caurosel-Img"
          />
        ))}
    </div>
  );
};

export default BannerCarousel;
