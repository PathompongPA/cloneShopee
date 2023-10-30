import { Outlet } from "react-router-dom";
import { NavbarComponent } from "../../Components";

export default function CartTemplate() {
  return (
    <div id="boxCartTemplate">
      <NavbarComponent />
      <Outlet />
    </div>
  );
}
