import { Link } from "react-router-dom";
import { dataFooter } from "../data/data"

export const FooterContainer = (props) => {
    const data = dataFooter;
    return(
        <footer>
            <div className="footer-logo">
                <span>expice</span>
            </div>
            <div className="footer-links">
                { data.linkFooter.map((item, index) => 
                <ul key={index} className="list-links">
                    <h3 className="list-links-title">{item.title}</h3>
                    { item.links.map((itemLink, index) => 
                    <li key={index} className="link-item">
                        <Link>{itemLink}</Link>
                    </li>
                    )}
                </ul>
                )}
            </div>
            <div className="footer-social-link">
                <Link className="social-link instagram">
                    <img src={data.ico.insta} alt="" />
                </Link>
                <Link className="social-link twitter">
                    <img src={data.ico.twitter} alt="" />
                </Link>
                <Link className="social-link fb">
                    <img src={data.ico.fb} alt="" />
                </Link>
            </div>
            <div className="footer-license">
                { data.license.map((item, index) => 
                <Link key={index} className="license-link">{item}</Link>
                )}
            </div>
        </footer>
    )
}