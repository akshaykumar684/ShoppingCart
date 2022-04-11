import "./BannerCarousel.css";
import { useState, useEffect } from "react";
import axiosFetch from "../../../axios/axios-congig";

const BannerCarousel = () => {
  const [isBannerLoaded, setIsBannerLoaded] = useState(false);
  const [banners, setBanners] = useState(null);

  useEffect(() => {
    axiosFetch(`/banners`)
      .then((res) => {
        const { status, data } = res;
        if (status === 200) {
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
            src={banner.bannerImageUrl}
            alt={banner.bannerImageAlt}
            className="caurosel-Img"
          />
        ))}
    </div>
  );
};

export default BannerCarousel;
