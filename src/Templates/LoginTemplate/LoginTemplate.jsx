import { Outlet } from "react-router-dom";
import { NavbarComponent } from "../../Components";
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
    </div>
  );
}
