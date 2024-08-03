import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { GoToTop } from "../../Initials";
import { FooterComponent, NavbarComponent } from "../../Components";

export default function LoginTemplate() {
  useEffect(() => {
    GoToTop();
    console.log("cookie in navbar Template :", document.cookie);
  }, []);
  return (
    <div id="boxLoginTemplate">
      <NavbarComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
}
