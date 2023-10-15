import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../component";

export default function Main() {
  return (
    <div id="boxMain">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
