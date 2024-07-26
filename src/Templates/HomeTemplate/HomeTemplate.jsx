import { useEffect } from "react";
import { FooterComponent, NavbarComponent } from "../../Components";
import { Outlet } from "react-router-dom";
import "./HomeTemplate.css";

export default function HomeTemplate() {

  useEffect(() => {
    GoToTop();
  }, []);

  return (
    <div className="HomeTemplate">
      <NavbarComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
}

const GoToTop = () => {
  window.scrollTo(0, 0);
}