import "./Navbar.css";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function NavbarComponent() {
  const navigate = useNavigate()
  let path = useLocation()
  useEffect(() => {
    let isHomePage = path.pathname === "/"
    const navbar__btnBack = document.getElementsByClassName("navbar__btn-back")[0]
    let navbar__search = document.getElementsByClassName("navbar__search")[0]
    console.log();
    if (isHomePage) {
      navbar__btnBack.classList.toggle("navbar__btn-back--disable")
    } else {
      navbar__search.classList.toggle("navbar__search--disable")
    }
  }, [path.pathname])


  function logout() {
    // GetApi("http://localhost:10000/api/logout", "POST");
  }

  function handleBtnBack() {
    navigate(-1)
  }

  return (
    <div className="navbar navbar--bg-invisible" id="navbar" data-scroll="0">
      <Link className="navbar__btn-back navbar__btn-back--invisible" id="navbar__btn-back" onClick={handleBtnBack} >back</Link>
      <Link className="navbar__logo" to="/" > LOGO</Link>
      <div className="navbar__search search" id="navbar__search"  >
        <input className="search__input" type="text" name="input search"></input>
        <Link className="search__submit" to="" onClick={logout()}> {">"} </Link>
      </div>
      <Link className="navbar__favorite" to="/favorite"> favorite</Link>
      <Link className="navbar__cart" to="/cart"> cart</Link>
      <Link className="navbar__profile" to="/login"> me</Link>
    </div>
  );
}
