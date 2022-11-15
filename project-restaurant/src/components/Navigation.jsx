import { useState } from "react";
import { Link } from "react-router-dom"
import { dataHeader } from "../data/data";

export const Navigation = (props) => {
    const data = dataHeader;
    const numberCart = props.numberCart;
    const [displayMenu, setDisplayMenu] = useState(false);
    const handleDisplayMenu = () => {
        setDisplayMenu(!displayMenu);
    }
    return (
        <nav className="navigation">
            <span className="nav-logo">{data.logo}</span>
            <div className="navbar">
                <Link className="navbar-login">
                    <img src={data.ico.user} alt="" />
                    <span>Log in</span>
                </Link>
                <Link to= "/cart" className="navbar-cart">
                    <img src={data.ico.cart} alt="" />
                    <span>{numberCart}</span>
                </Link>
                <button onClick={handleDisplayMenu} className="btn-navbar-menu">
                    { displayMenu ? 
                        ( <img src={data.ico.close} alt="" /> )
                        : 
                        ( <span>MENU</span> )
                    }
                </button>
                <ul style = { displayMenu ? {display: "block"} : {display: "none"}} className="navbar-nav">
                        <li className="nav-item item1">
                            <img className="item-img-call" src={data.ico.call} alt=""></img>
                            <span className="item-number-phone">{data.numberPhone}</span>
                            <span className="item-time">{data.time}</span>
                        </li>
                        { data.navLinks.map((item, index) => 
                         <li key={index} className="nav-item">
                            <Link className="nav-link">{item}</Link>
                         </li>
                        )}
                    </ul>
            </div>
        </nav>
    )
}