import "../../styles/core/Reset.scss";
import "../../styles/core/Reset.scss";
import logo from "../../images/header-img.png";

function Header() {
    return (
        <header className="header">
        <img
          className="header__img"
          src={logo}
          alt="Rick and Morty"
          title="Rick and Morty"
        ></img>
      </header>
    )
}

export default Header;