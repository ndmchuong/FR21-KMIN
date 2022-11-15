import { Link } from "react-router-dom";
import { dataMobileApp } from "../data/data";

export const MobileAppContainer = (props) => {
  const data = dataMobileApp;
  return (
    <section className="mobile-app">
      <div className="container-mobile-app">
        <div className="container-title-link-content">
          <h2 className="mobile-app-title">{data.title}</h2>
          <p className="mobile-app-content">{data.desc}</p>
          <div className="container-mobile-app-link">
            <Link className="link-gg-play">
              <img className="icon-gg-play" src={data.icon.ggPlay} alt="" />
              <p className="description-gg-play">
                GET IT ON <span>Google Play</span>
              </p>
            </Link>
            <Link className="link-app-store">
              <img className="icon-app-store" src={data.icon.appStore} alt="" />
              <p className="description-app-store">
                Download On The <span>App Store</span>
              </p>
            </Link>
          </div>
        </div>
        <div className="container-mobile-app-description">
          <img src={data.img} alt="" className="mobile-app-description-img" />
        </div>
      </div>
    </section>
  );
};
