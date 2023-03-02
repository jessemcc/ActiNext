import "./Header.scss";
import "../../styles/global.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__wrap">
        <div className="header__logo">ActiNext</div>
        <ul className="header__nav-list">
          <li>
            <Link className="header__link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="header__link" to="about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
