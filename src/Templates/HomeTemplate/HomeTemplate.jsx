import { useEffect } from "react";
import { FooterComponent, NavbarComponent } from "../../Components";
import "./HomeTemplate.css";
import { Outlet } from "react-router-dom";
import { GoToTop } from "../../Initials";
export default function HomeTemplate() {
  useEffect(() => {
    GoToTop();
  }, []);
  return (
    <div id="boxHomeTemplate">
      <NavbarComponent />
      <div id="boxMainTemplateContent">
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  );
}
