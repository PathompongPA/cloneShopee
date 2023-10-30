import { Outlet } from "react-router-dom";
import { FooterComponent, NavbarComponent } from "../../Components";
import { useEffect } from "react";
import { GoToTop } from "../../Initials";

export default function LoginTemplate() {
  useEffect(() => {
    GoToTop();
  }, []);
  return (
    <div id="boxLoginTemplate">
      <NavbarComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
}
