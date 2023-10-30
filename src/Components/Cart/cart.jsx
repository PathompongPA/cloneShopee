import "./cart.css";
import { useContext, useEffect } from "react";
import { SomeDate } from "../../App";
import CardCartComponent from "./cartCard/cardCart";
import TitleCardCart from "./TitleCardCart/TitleCardCart";
import BackButtonComponent from "../BackButton/BackButton";
import TotalCart from "./TotalCart/TotalCart";

export default function CartComponent() {
  const { state } = useContext(SomeDate);
  useEffect(() => {
    console.log(">>>>>>> state cart in useEffect ShowProduct : ", state.cart);
  }, [state.cart]);

  return (
    <>
      {state.cart ? (
        <div id="boxCartComponent" className="">
          <div id="CartComponentBackButton">
            <BackButtonComponent />
          </div>
          <TitleCardCart />
          {state.cart &&
            state.cart.map((props, index) => {
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
