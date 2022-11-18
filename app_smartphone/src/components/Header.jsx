import { Link } from "react-router-dom";


export const Header = (props) => {
    return (
        <header className="navigation">
            {/* <div className="nav-login"></div> */}
            <div className="nav-logo">
                <Link className="nav-logo-link" to='/'>
                    <img className="logo-img" src='img/logo.png' alt="" />
                </Link>
            </div>
            <div className="nav-cart">
                <Link className="nav-cart-link" to="/cart">
                    <img className="cart-img" src="img/cart-icon.png" alt="" />
                    <span className="cart-content">Giỏ hàng của tôi</span>
                </Link>
            </div>
            
        </header>
    )
}