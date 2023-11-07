import "./Login.css";
import { useContext, useEffect, useRef } from "react";
import { SomeDate } from "../../App";
import GetApi from "../../Initials/GetApi";

export default function LoginComponent() {
  const elementInputPassword = useRef();
  const elementInputUserName = useRef();
  const elementShowPassword = useRef();
  const { state } = useContext(SomeDate);

  async function SubmitLogin(e) {
    e.preventDefault();
    console.log("cookie : ", document.cookie);
    const user = elementInputUserName.current.value;
    const password = elementInputPassword.current.value;
    console.log(user, password);
    const data = {
      user: user,
      // email: "test@gmail.com",
      password: password,
      credentials: "include",
    };
    const credentials = "include";
    console.log("data in login : ", data);
    const login = await GetApi(
      "http://localhost:10000/login",
      "POST",
      data,
      credentials
    );
    console.log(login);
    console.log("cookie: ", document.cookie);
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
  }, [state]);

  return (
    <div id="boxLoginComponent" className="boxContent">
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
