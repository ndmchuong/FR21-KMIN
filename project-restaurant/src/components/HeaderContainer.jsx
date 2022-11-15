import { dataHeader } from "../data/data"
import { Navigation } from "./Navigation"


export const HeaderContainer = (props) => {
    const data = dataHeader;
    const numberCart = props.numberCart;
    return (
        <header className="header">
            <div className="background-left"></div>
            <div className="background-right"></div>
            <div className="header-content">
                <Navigation numberCart = {numberCart}/>
                <div className="container-title">
                    <span>{data.subTitle}</span>
                    <h1 className="title">{data.title}</h1>
                </div>
                <div className="container-banner">
                    <div className="banner">
                        <img src={data.banner} alt="" className="banner-img"/>
                    </div>
                </div>
                <ul className="highlight-header">
                    { data.highlight.map((item, index) => 
                    <li key={index} className="highlight-item">
                        <img src={item.ico} alt="" />
                        <span>{item.content}</span>
                    </li>
                    )}
                </ul>
                <div className="container-slide-banner">
                    <button className="slide-banner">
                        <img className="slide-icon" src={data.ico.arrowLeft} alt="" />
                    </button>
                    <button className="slide-banner">
                        <img className="slide-icon" src={data.ico.arrowRight} alt="" />
                    </button>
                </div>
            </div>
        </header>
    )
}