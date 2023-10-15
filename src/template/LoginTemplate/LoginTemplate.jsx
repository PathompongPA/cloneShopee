import { Outlet } from "react-router-dom";
import { Navbar } from "../../component";

export default function LoginTemplate() {
  return (
    <div id="boxLoginTemplate">
      <Navbar />
      <Outlet />
    </div>
  );
}
