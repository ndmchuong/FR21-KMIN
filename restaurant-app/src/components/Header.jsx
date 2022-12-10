import { Link } from "react-router-dom";
import logo from "../assets/DC Coffee.png";
import userIcon from "../assets/user-icon.png";
import cartIcon from "../assets/shopping-cart-icon.png";

export const Header = () => {
  return (
    <header className="navigation">
      <ul className="navbar-nav">
        <li className="nav-link">
          <Link>Menu</Link>
        </li>
        <li className="nav-link">
          <Link>Đặt lịch</Link>
        </li>
        <li className="nav-link">
          <Link>Mua hàng</Link>
        </li>
        <li className="nav-link">
          <Link>Khuyến mãi</Link>
        </li>
      </ul>
      <Link className="nav-logo">
        <img className="logo-img" src={logo} alt="" />
      </Link>
      <div className="nav-login-cart">
        <Link className="nav-login">
          <img src={userIcon} alt="user" />
          <span>Thành viên</span>
        </Link>
        <Link className="nav-cart">
          <img src={cartIcon} alt="user" />
          <span>Giỏ hàng</span>
        </Link>
      </div>
    </header>
  );
};
