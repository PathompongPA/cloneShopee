import { useContext, useEffect, useRef, useState } from "react";
import "./Login.css";
import { SomeDate } from "../../App";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
  const elementInputPassword = useRef();
  const elementInputUserName = useRef();
  const elementShowPassword = useRef();
  const navigate = useNavigate();
  const [, forceRender] = useState(undefined);
  const { state, dispatch } = useContext(SomeDate);

  function SubmitLogin(e) {
    if (state.user === elementInputUserName.current.value) {
      if (state.password === elementInputPassword.current.value) {
        dispatch({ type: "toggle-isLogin" });
        dispatch({ type: "login-Success" });
        navigate("/");
      }
    }
    e.preventDefault();
  }

  function toggleShowPassword() {
    if (elementInputPassword.current.type === "password") {
      elementShowPassword.current.innerText = "HIDE";
      elementInputPassword.current.type = "text";
    } else {
      elementShowPassword.current.innerText = "SHOW";
      elementInputPassword.current.type = "password";
    }
    console.log("toggleShowPassword : ", elementInputPassword.current.type);
  }

  useEffect(() => {
    console.log("LoginComponent : start");
    console.log(state);
  }, []);

  return (
    <div id="boxLoginComponent" className="boxComponent Content">
      <div id="boxLogin" className="boxComponent">
        <div id="boxTitleLogin" className="boxContent">
          <h1>Login</h1>
        </div>
        <div id="boxFormLogin" className="boxContent">
          <form onSubmit={SubmitLogin}>
            <label>username</label>
            <br></br>
            <div id="boxInputUserName">
              <input
                type="text"
                name="username"
                ref={elementInputUserName}
                autoFocus
              ></input>
            </div>
            <br></br>
            <label>password</label>
            <div id="boxInputPassword">
              <br></br>
              <input
                id="inputPassword"
                type="password"
                ref={elementInputPassword}
              ></input>
              <span
                id="ShowPassword"
                onClick={toggleShowPassword}
                ref={elementShowPassword}
              >
                SHOW
              </span>
            </div>
            <br></br>
            <div id="boxSubmitLogin" className="boxComponent ">
              <input id="SubmitLogin" type="submit"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
