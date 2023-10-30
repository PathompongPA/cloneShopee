import "./Navbar.css";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <div id="boxNavbar">
      <ul id="navbar">
        <li id="logo" className="TitleNavbarShow">
          <Link to="/"> LOGO</Link>
        </li>
        <li id="search" className="TitleNavbarShow">
          <input type="text"></input>
          <Link to=""> {">"}</Link>
        </li>
        <li id="favorite" className="TitleNavbarShow">
          <Link to="/favorite"> favorite</Link>
        </li>
        <li id="cart" className="TitleNavbarShow">
          <Link to="/cart"> cart</Link>
        </li>
        <li id="profile" className="TitleNavbarShow">
          <Link to="/login"> me</Link>
        </li>
      </ul>
    </div>
  );
}
