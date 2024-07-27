import "./cart.css";
import { useContext, useEffect } from "react";
import { SomeDate } from "../../App";
import CardCartComponent from "./cartCard/cardCart";
import TitleCardCart from "./TitleCardCart/TitleCardCart";
import BackButtonComponent from "../BackButton/BackButton";
import TotalCart from "./TotalCart/TotalCart";

export default function CartComponent() {
  const { globalState } = useContext(SomeDate);
  useEffect(() => {
    console.log(">>>>>>> state cart in useEffect ShowProduct : ", globalState.cart);
  }, [globalState.cart]);

  return (
    <>
      {globalState.cart ? (
        <div id="boxCartComponent" className="">
          <div id="CartComponentBackButton">
            <BackButtonComponent />
          </div>
          <TitleCardCart />
          {globalState.cart &&
            globalState.cart.map((props, index) => {
              return (
                <div id="boxCardCart" key={index}>
                  <CardCartComponent value={props} key={index} />
                </div>
              );
            })}
          <TotalCart />
        </div>
      ) : (
        <div id="boxNoItemInCart">No item in cart .</div>
      )}
    </>
  );
}
