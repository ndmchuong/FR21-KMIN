import { useState } from "react";
import { dataBanner } from "../data/data";
import arrow from "../assets/arrow-right.png";

export const Hero = () => {
  const arrBanner = dataBanner;
  const [indexBanner, setIndexBanner] = useState(0);
  const handleSlideBanner = (action) => {
    switch (action) {
      case "prev":
        if (indexBanner === 0) {
          setIndexBanner(arrBanner.length - 1);
        } else {
          setIndexBanner(indexBanner - 1);
        }
        break;
      case "next":
        if (indexBanner === arrBanner.length - 1) {
          setIndexBanner(0);
        } else {
          setIndexBanner(indexBanner + 1);
        }
        break;
      default:
        break;
    }
  };
  return (
    <div className="hero">
      <div className="hero-titlebar">
        <div className="titlebar-title">
          <span className="sub-heading">Chào mừng đến với</span>
          <h3 className="title">DC COFFEE</h3>
        </div>
        <div className="titlebar-description">
          <h3 className="title">{arrBanner[indexBanner].desc}</h3>
        </div>
      </div>
      <div className="hero-banner">
        <img className="banner" src={arrBanner[indexBanner].url} alt="" />
        <button
          className="btn-slide prev"
          onClick={() => handleSlideBanner("prev")}
        >
          <img className="arrow-left" src={arrow} alt="" />
        </button>
        <button
          className="btn-slide next"
          onClick={() => handleSlideBanner("next")}
        >
          <img className="arrow-right" src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};
