import { useContext } from "react";
import { SomeDate } from "../../App";
import { FooterComponent, LoaderComponent, NavbarComponent } from "../../Components";
import { Outlet } from "react-router-dom";
import "./HomeTemplate.css";

export default function HomeTemplate() {
  const { globalState } = useContext(SomeDate)
  let isLoadFinish = globalState.ProductJson !== undefined
  if (isLoadFinish) {
    return (
      <div className="home-template">
        <NavbarComponent />
        <Outlet />
        <FooterComponent />
      </div>
    );
  } else {
    <LoaderComponent />
  }
}