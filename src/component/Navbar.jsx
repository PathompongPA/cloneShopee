import "../assets/css/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SomeDate } from "../App";

export default function Navbar() {
  const { state, dispatch } = useContext(SomeDate);
  const navigate = useNavigate();

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
            <li
              id={props.title}
              onClick={() => {
                navigate(props.path);
              }}
              className="TitleNavbarShow"
              key={props.title}
            >
              {props.title}
            </li>
          );
        })}
    </ul>
  );
}
