import "../assets/css/Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SomeDate } from "../App";

export default function Navbar() {
  const { state, dispatch } = useContext(SomeDate);

  // function clickLogout() {
  //   console.log("clickLogout");
  // }

  return (
    <ul id="navbar" className="h3">
      {state.titleNavbar &&
        state.titleNavbar.map((props) => {
          if (state.titleNavbar.title === "logout") {
            console.log("logout");
          }
          return (
            <li id={props.title} className="TitleNavbarShow" key={props.title}>
              <Link to={props.path} key={props.title}>
                {props.title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
